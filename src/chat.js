import * as fs from "fs";
import { useEffect, useState, useWindow } from "seniman";
import { createServer } from "seniman/server";
import { proxy, subscribe } from "valtio";
const tailwindCssText = fs.readFileSync("./dist/output.css", "utf8");
const state = proxy({
  messages: [
    { player: "John", message: "hello" },
    { player: "Maxwell", message: "world" },
  ],
  players: [],
});

const CHAT_LIMIT = 10;

function Body() {
  let window = useWindow();
  let [getText, setText] = useState("");
  let [getMessages, setMessages] = useState(state.messages);
  useEffect(() => {
    const unsubscribe = subscribe(state, () => {
      setMessages(state.messages);
      window.clientExec(
        $c(() => {
          setTimeout(() => {
            const messages = document.getElementById("messages");
            messages.scrollTop = messages.scrollHeight;
          });
        })
      );
    });
    return () => unsubscribe();
  }, []);

  let onClick = () => {
    if (getText() !== "") {
      state.messages = [
        ...state.messages.filter(
          (_, i) => state.messages.length - i <= CHAT_LIMIT
        ),
        { player: "Random", message: getText() },
      ];
      setText("");
    }
  };

  return (
    <div class="relative flex min-h-screen flex-col justify-start overflow-hidden bg-gray-50 py-6 sm:py-4 sm:px-6">
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-screen-lg sm:rounded-lg sm:px-10 w-full">
        <div class="mx-auto w-full">
          <div class="divide-y divide-gray-300/50">
            <div class="mb-6 text-5xl font-bold">Acakata</div>
            <div
              class="space-y-2 py-8 text-base leading-7 text-gray-600 flex flex-col h-96 justify-start items-start overflow-y-auto"
              id="messages"
            >
              {getMessages().map((message, i) => {
                return (
                  <div key={i} class="bg-neutral-50 py-2 px-3 rounded-lg">
                    <div class="font-semibold">{message.player}</div>
                    {message.message}
                  </div>
                );
              })}
            </div>
            <div class="pt-8 text-base leading-7 flex flex-row space-x-4">
              <input
                value={getText()}
                onBlur={$c((e) => {
                  $s(setText)(e.target.value);
                })}
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
