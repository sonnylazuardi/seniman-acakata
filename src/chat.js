import * as fs from "fs";
import { useEffect, useState, useWindow } from "seniman";
import { createServer } from "seniman/server";
import { proxy, subscribe } from "valtio";
import { subscribeKey } from "valtio/utils";

import { randomize, getScore, answeredBefore } from "./questions.js";
const tailwindCssText = fs.readFileSync("./output/output.css", "utf8");
const state = proxy({
  messages: [
    { player: "John", message: "hello" },
    { player: "Maxwell", message: "world" },
  ],
  answers: [],
  leaderboard: [],
  timer: 0,
  question: null,
});

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

function Body() {
  let window = useWindow();
  let [getMe, setMe] = useState("Anonymous");
  let [getKeyboard, setKeyboard] = useState(false);
  let [getTimer, setTimer] = useState(state.timer);
  let [getQuestion, setQuestion] = useState(state.question);
  let [getLeaderboard, setLeaderboard] = useState(state.leaderboard);
  let [getEditMe, setEditMe] = useState(false);
  let [getText, setText] = useState("");
  let [getMessages, setMessages] = useState(state.messages);
  useEffect(() => {
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
    });
    window.clientExec(
      $c(() => {
        const name = localStorage.getItem("me");
        if (name) {
          $s(setMe)(localStorage.getItem("me"));
        }

        const mainWindow = document.getElementById("main");

        let isMobile = window.matchMedia(
          "only screen and (max-width: 480px)"
        ).matches;
        if (isMobile) {
          mainWindow.style.height = "-webkit-fill-available";
        }

        if ("visualViewport" in window) {
          const leaderWindow = document.getElementById("leaderboard");
          const VIEWPORT_VS_CLIENT_HEIGHT_RATIO = 0.75;
          window.visualViewport.addEventListener("resize", function (event) {
            if (
              (event.target.height * event.target.scale) /
                window.screen.height <
              VIEWPORT_VS_CLIENT_HEIGHT_RATIO
            ) {
              // show
              mainWindow.style.paddingTop = "390px";
              leaderWindow.style.display = "none";
            } else {
              // hidden
              mainWindow.style.paddingTop = "0";
              leaderWindow.style.display = "inherit";
            }
          });
        }
      })
    );
    return () => {
      unsubscribe();
      unsubscribeMessage();
    };
  }, []);

  const addScore = (player, score) => {
    const currentLeaderboard = state.leaderboard.find(
      (v) => v.player === player
    );

    if (currentLeaderboard) {
      state.leaderboard = state.leaderboard.map((v) => {
        if (v.player === player) {
          return {
            ...v,
            score: v.score + score,
          };
        }
        return v;
      });
    } else {
      state.leaderboard = [...state.leaderboard, { player, score }];
    }
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
          >
            {getLeaderboard()
              .sort((a, b) => b.score - a.score)
              .map((leaderboard) => {
                return (
                  <div class=" bg-neutral-500 text-white flex flex-row rounded-lg items-center justify-center py-1 px-3">
                    <div>{leaderboard.player}</div>
                    <div class="font-semibold ml-1">{leaderboard.score}</div>
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
          <div class="pt-8 text-base leading-7 flex flex-row space-x-4">
            <div
              class="flex justify-center items-center cursor-pointer"
              onClick={() => setEditMe((v) => true)}
            >
              {!getEditMe() ? (
                getMe()
              ) : (
                <input
                  value={getMe()}
                  onBlur={$c((e) => {
                    $s(setMe)(e.target.value);
                    localStorage.setItem("me", e.target.value);
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
