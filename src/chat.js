import * as fs from "fs";
import { useEffect, useState, useWindow, useMemo, onCleanup } from "seniman";
import { createServer } from "seniman/server";
import { proxy, subscribe } from "valtio";
import { subscribeKey } from "valtio/utils";
import { createClient } from "@supabase/supabase-js";
import { randomize, getScore, answeredBefore } from "./questions.js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const tailwindCssText = fs.readFileSync("./output/output.css", "utf8");
const state = proxy({
  messages: [
    { player: "John", message: "hello" },
    { player: "Maxwell", message: "world" },
  ],
  online: [],
  answers: [],
  leaderboard: [],
  timer: 0,
  question: randomize(),
});

supabase
  .from("leaderboard")
  .select()
  .then(({ data }) => {
    state.leaderboard = data;
  })
  .catch((e) => console.error(e));

const CHAT_LIMIT = 40;
const TIMER_LIMIT = 15;

let interval = setInterval(() => {
  state.timer++;
  if (state.timer >= TIMER_LIMIT) {
    state.timer = 0;
    state.answers = [];
    state.question = randomize();
  }
}, 1000);

function useTypingModeEnabled() {
  let window = useWindow();
  let [getTypingModeEnabled, setTypingModeEnabled] = useState(false);

  let _handle = (value) => {
    // TODO: false value from the client is currently sent as empty string
    setTypingModeEnabled(!!value);
  }

  window.clientExec($c(() => {
    const VIEWPORT_VS_CLIENT_HEIGHT_RATIO = 0.75;
    window.visualViewport.addEventListener("resize", (event) => {

      let typingModeShouldBeEnabled = ((event.target.height * event.target.scale) /
        window.screen.height) <
        VIEWPORT_VS_CLIENT_HEIGHT_RATIO;

      $s(_handle)(typingModeShouldBeEnabled);
    });
  }));

  return getTypingModeEnabled;
}

function Body() {
  let window = useWindow();
  let [getTimer, setTimer] = useState(state.timer);
  let [getQuestion, setQuestion] = useState(state.question);
  let [getLeaderboard, setLeaderboard] = useState(state.leaderboard);
  let [getEditMe, setEditMe] = useState(false);
  let [getText, setText] = useState("");
  let [getMessages, setMessages] = useState(state.messages);
  let [getOnline, setOnline] = useState(state.online);
  let typingModeEnabled = useTypingModeEnabled();

  let userNameCookie = window.cookie("__acakata_user");

  let getMe = useMemo(() => {
    return userNameCookie() || "anonim";
  });

  const updateUserName = (name) => {
    window.setCookie("__acakata_user", name);
  }

  const unsubscribeMessage = subscribeKey(state, "messages", (messages) => {
    setMessages(messages);
    window.clientExec(
      $c(() => {
        setTimeout(() => {
          const messages = document.getElementById("messages");
          messages.scrollTop = messages.scrollHeight;
        });
      })
    );
  });

  const unsubscribe = subscribe(state, () => {
    setTimer(state.timer);
    setQuestion(state.question);
    setLeaderboard(state.leaderboard);
    setOnline(state.online);
  });

  useEffect(() => {
    if (!typingModeEnabled()) {
      window.clientExec(
        $c(() => {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 200);
        })
      );
    }
  });

  onCleanup(() => {
    unsubscribe();
    unsubscribeMessage();
    state.online = state.online.filter((online) => online !== getMe());
  });

  useEffect(() => {
    if (!state.online.includes(getMe())) {
      state.online = [...state.online, getMe()];
    }
  });

  const addScore = async (player, score) => {

    const { data: currentData } = await supabase
      .from("leaderboard")
      .select()
      .eq("player", player);
    let res = await supabase.from("leaderboard").upsert({
      player,
      score: parseInt((currentData ? currentData[0]?.score : 0) + score),
    });
    const { data } = await supabase.from("leaderboard").select();
    state.leaderboard = data;
  };

  let onClick = () => {
    let answer = getText();
    if (answer !== "") {
      if (
        answer.toUpperCase() === state.question?.answer &&
        !answeredBefore(state.answers, getMe())
      ) {
        const currentAnswer = { player: getMe(), rank: state.answers.length };
        state.answers = [...state.answers, currentAnswer];

        const score = getScore(currentAnswer.rank);
        addScore(getMe(), score);
        answer = `Menjawab dengan benar (+${score})`;
      }
      state.messages = [
        ...state.messages.filter(
          (_, i) => state.messages.length - i <= CHAT_LIMIT
        ),
        { player: getMe(), message: answer },
      ];
      setText("");
    }
  };

  return (
    <div class="relative flex min-h-screen flex-col justify-start overflow-hidden bg-gray-50">
      <div
        class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-screen-lg sm:rounded-lg sm:px-10 w-full flex"
        id="main"
        style={{
          paddingTop: typingModeEnabled() ? '450px' : '24px',
          height: '100vh'
        }}
      >
        <div class="divide-y divide-gray-300/50 flex flex-col w-full">
          <div class="flex flex-row justify-between pb-6 items-center">
            <div class="text-2xl font-bold">
              Acakata → {getQuestion()?.randomAnswer}{" "}
              <span class="text-base font-normal ml-1">
                {getQuestion()?.question}
              </span>
            </div>
            <div class="text-2xl font-bold p-2">{TIMER_LIMIT - getTimer()}</div>
          </div>
          <div
            class="flex flex-row bg-neutral-50 overflow-y-hidden h-20 items-center space-x-2 px-4"
            id="leaderboard"
            style={{
              display: typingModeEnabled() ? 'none' : 'inherit'
            }}
          >
            <div>{getOnline().length} online</div>
            {(getLeaderboard() || [])
              .sort((a, b) => b.score - a.score)
              .map((leaderboard) => {
                const isOnline = getOnline().includes(leaderboard.player);
                return (
                  <div class=" bg-neutral-500 text-white flex flex-row rounded-lg items-center justify-center py-1 px-3 relative">
                    <div>{leaderboard.player}</div>
                    <div class="font-semibold ml-1">{leaderboard.score}</div>
                    {isOnline ? (
                      <div class="w-3 h-3 bg-green-500 absolute -top-1 -right-1 rounded-full border-2 border-neutral-50"></div>
                    ) : null}
                  </div>
                );
              })}
          </div>
          <div
            class="space-y-2 py-8 text-base leading-7 text-gray-600 flex flex-col justify-start items-start overflow-y-auto flex-1"
            id="messages"
          >
            {getMessages().map((message) => {
              return (
                <div class="bg-neutral-50 py-2 px-3 rounded-lg">
                  <div class="font-semibold">{message.player}</div>
                  {message.message}
                </div>
              );
            })}
          </div>
          <div
            class="pt-8 text-base leading-7 flex flex-row space-x-4"
            id="actions"
            style={{
              paddingBottom: typingModeEnabled() ? '0' : '80px'
            }}
          >
            <div
              class="flex justify-center items-center cursor-pointer"
              onClick={() => setEditMe(true)}
            >
              {!getEditMe() ? (
                getMe()
              ) : (
                <input
                  value={getMe()}
                  onBlur={$c((e) => {
                    $s(updateUserName)(e.target.value);
                    $s(setEditMe)(false);
                  })}
                  type="text"
                  class="border rounded-lg border-neutral-75 px-4 py-2 w-full"
                ></input>
              )}
            </div>

            <input
              value={getText()}
              onBlur={$c((e) => {
                $s(setText)(e.target.value);
              })}
              onKeyDown={$c((e) => {
                if (e.key === "Enter") {
                  $s(setText)(e.target.value);
                  $s(onClick)();
                  e.target.value = "";
                }
              })}
              placeholder="Message"
              type="text"
              class="border rounded-lg border-neutral-75 px-4 py-2 w-full"
            ></input>
            <button
              class="p-4 bg-white font-semibold hover:bg-neutral-50 rounded-lg"
              onClick={onClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Head() {
  return (
    <>
      <style>{tailwindCssText}</style>
    </>
  );
}

let server = createServer({ Body, Head });

server.listen(3002);
