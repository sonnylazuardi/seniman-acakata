import * as fs from "fs";
import { useEffect, useState, useWindow } from "seniman";
import { createServer } from "seniman/server";
import { proxy, subscribe } from "valtio";
import { subscribeKey } from "valtio/utils";
import { randomize, getScore, answeredBefore } from "./questions.js";
import { _createBlock as _$createBlock, _createComponent as _$createComponent, useMemo as _useMemo$, _declareBlock as _$declareBlock, _declareClientFunction as _$declareClientFunction } from "seniman";
const _c$1 = _$declareClientFunction({
  argNames: [],
  body: "{\n  setTimeout(() => {\n    const messages = document.getElementById(\"messages\");\n    messages.scrollTop = messages.scrollHeight;\n  });\n}"
});
const _c$2 = _$declareClientFunction({
  argNames: [],
  body: "{\n  const name = localStorage.getItem(\"me\");\n  if (name) {\n    this.serverFunctions[0](localStorage.getItem(\"me\"));\n  }\n  const mainWindow = document.getElementById(\"main\");\n  let isMobile = window.matchMedia(\"only screen and (max-width: 480px)\").matches;\n  if (isMobile) {\n    mainWindow.style.height = \"-webkit-fill-available\";\n  }\n  if (\"visualViewport\" in window) {\n    const leaderWindow = document.getElementById(\"leaderboard\");\n    const VIEWPORT_VS_CLIENT_HEIGHT_RATIO = 0.75;\n    window.visualViewport.addEventListener(\"resize\", function (event) {\n      if (event.target.height * event.target.scale / window.screen.height < VIEWPORT_VS_CLIENT_HEIGHT_RATIO) {\n        // show\n        mainWindow.style.paddingTop = \"390px\";\n        leaderWindow.style.display = \"none\";\n      } else {\n        // hidden\n        mainWindow.style.paddingTop = \"0\";\n        leaderWindow.style.display = \"inherit\";\n      }\n    });\n  }\n}"
});
const _c$3 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  this.serverFunctions[0](e.target.value);\n  localStorage.setItem(\"me\", e.target.value);\n  this.serverFunctions[1](false);\n}"
});
const _c$4 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  this.serverFunctions[0](e.target.value);\n}"
});
const _c$5 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  if (e.key === \"Enter\") {\n    this.serverFunctions[0](e.target.value);\n    this.serverFunctions[1]();\n    e.target.value = \"\";\n  }\n}"
});
const _b$1 = _$declareBlock({
  templateBuffer: "ABdBAgBMcmVsYXRpdmUgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1zdGFydCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS01MABBAgCAcmVsYXRpdmUgYmctd2hpdGUgcHgtNiBwdC0xMCBwYi04IHNoYWRvdy14bCByaW5nLTEgcmluZy1ncmF5LTkwMC81IHNtOm14LWF1dG8gbWF4LXctc2NyZWVuLWxnIHNtOnJvdW5kZWQtbGcgc206cHgtMTAgdy1mdWxsIGZsZXgDAARtYWluAEECADBkaXZpZGUteSBkaXZpZGUtZ3JheS0zMDAvNTAgZmxleCBmbGV4LWNvbCB3LWZ1bGwAwQIAL2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHBiLTYgaXRlbXMtY2VudGVyAMECABJ0ZXh0LTJ4bCBmb250LWJvbGQAgAAMQWNha2F0YSDihpIggAADPCE+gAABIAQCABp0ZXh0LWJhc2UgZm9udC1ub3JtYWwgbWwtMQCAAAEgAQIAFnRleHQtMnhsIGZvbnQtYm9sZCBwLTIAgAABIIECAE5mbGV4IGZsZXgtcm93IGJnLW5ldXRyYWwtNTAgb3ZlcmZsb3cteS1oaWRkZW4gaC0yMCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHB4LTQDAAtsZWFkZXJib2FyZACAAAEggQIAb3NwYWNlLXktMiBweS04IHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1ncmF5LTYwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgb3ZlcmZsb3cteS1hdXRvIGZsZXgtMQMACG1lc3NhZ2VzAIAAASBBAgAwcHQtOCB0ZXh0LWJhc2UgbGVhZGluZy03IGZsZXggZmxleC1yb3cgc3BhY2UteC00AIECAC9mbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlcgCAAAEghQYAB01lc3NhZ2UHAAR0ZXh0AgA0Ym9yZGVyIHJvdW5kZWQtbGcgYm9yZGVyLW5ldXRyYWwtNzUgcHgtNCBweS0yIHctZnVsbACAAAEgSAIAOXAtNCBiZy13aGl0ZSBmb250LXNlbWlib2xkIGhvdmVyOmJnLW5ldXRyYWwtNTAgcm91bmRlZC1sZwAAAARTZW5k",
  elScriptBuffer: "FQH/AQABAQECAQMCBAIFAgYCAwIIAgICCgILAgwCDQIOAQ8CEAIRAhICEwcDBQMFB/8J/wv/Df8Q/wMQEhQ=",
  tokens: ["div", "class", "id", "span", "input", "placeholder", "type", "button"]
});
const _b$2 = _$declareBlock({
  templateBuffer: "AARBAgBZIGJnLW5ldXRyYWwtNTAwIHRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyByb3VuZGVkLWxnIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xIHB4LTMAgQCAAAEgAQIAEmZvbnQtc2VtaWJvbGQgbWwtMQA=",
  elScriptBuffer: "AwH/AgACAQIA/wL/AA==",
  tokens: ["div", "class"]
});
const _b$3 = _$declareBlock({
  templateBuffer: "AANBAgAiYmctbmV1dHJhbC01MCBweS0yIHB4LTMgcm91bmRlZC1sZwCBAgANZm9udC1zZW1pYm9sZAAAAAEg",
  elScriptBuffer: "AQH/AgD///8A",
  tokens: ["div", "class"]
});
const _b$4 = _$declareBlock({
  templateBuffer: "AAEBAgAEdGV4dAMANGJvcmRlciByb3VuZGVkLWxnIGJvcmRlci1uZXV0cmFsLTc1IHB4LTQgcHktMiB3LWZ1bGwA",
  elScriptBuffer: "AAAA",
  tokens: ["input", "type", "class"]
});
const _b$5 = _$declareBlock({
  templateBuffer: "AAEBAA==",
  elScriptBuffer: "AAH//wA=",
  tokens: ["style"]
});
const tailwindCssText = fs.readFileSync("./output/output.css", "utf8");
const state = proxy({
  messages: [{
    player: "John",
    message: "hello"
  }, {
    player: "Maxwell",
    message: "world"
  }],
  answers: [],
  leaderboard: [],
  timer: 0,
  question: null
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
    const unsubscribeMessage = subscribeKey(state, "messages", messages => {
      setMessages(messages);
      window.clientExec({
        clientFnId: _c$1
      });
    });
    const unsubscribe = subscribe(state, () => {
      setTimer(state.timer);
      setQuestion(state.question);
      setLeaderboard(state.leaderboard);
    });
    window.clientExec({
      clientFnId: _c$2,
      serverBindFns: [setMe]
    });
    return () => {
      unsubscribe();
      unsubscribeMessage();
    };
  }, []);
  const addScore = (player, score) => {
    const currentLeaderboard = state.leaderboard.find(v => v.player === player);
    if (currentLeaderboard) {
      state.leaderboard = state.leaderboard.map(v => {
        if (v.player === player) {
          return {
            ...v,
            score: v.score + score
          };
        }
        return v;
      });
    } else {
      state.leaderboard = [...state.leaderboard, {
        player,
        score
      }];
    }
  };
  let onClick = () => {
    let answer = getText();
    if (answer !== "") {
      if (answer.toUpperCase() === state.question?.answer && !answeredBefore(state.answers, getMe())) {
        const currentAnswer = {
          player: getMe(),
          rank: state.answers.length
        };
        state.answers = [...state.answers, currentAnswer];
        const score = getScore(currentAnswer.rank);
        addScore(getMe(), score);
        answer = `Menjawab dengan benar (+${score})`;
      }
      state.messages = [...state.messages.filter((_, i) => state.messages.length - i <= CHAT_LIMIT), {
        player: getMe(),
        message: answer
      }];
      setText("");
    }
  };
  return _$createBlock(_b$1, [() => getQuestion()?.randomAnswer, () => " ", () => getQuestion()?.question, () => TIMER_LIMIT - getTimer(), () => getLeaderboard().sort((a, b) => b.score - a.score).map(leaderboard => {
    return _$createBlock(_b$2, [() => leaderboard.player, () => leaderboard.score], null, null);
  }), () => getMessages().map(message => {
    return _$createBlock(_b$3, [() => message.player, () => message.message], null, null);
  }), () => !getEditMe() ? getMe() : _$createBlock(_b$4, null, [{
    targetId: 255,
    type: 3,
    fn: {
      clientFnId: _c$3,
      serverBindFns: [setMe, setEditMe]
    }
  }], [{
    targetId: 255,
    effectFn(elRef) {
      elRef.setAttribute("value", getMe())
    }
  }])], [{
    targetId: 0,
    type: 1,
    fn: () => setEditMe(v => true)
  }, {
    targetId: 1,
    type: 3,
    fn: {
      clientFnId: _c$4,
      serverBindFns: [setText]
    }
  }, {
    targetId: 1,
    type: 6,
    fn: {
      clientFnId: _c$5,
      serverBindFns: [setText, onClick]
    }
  }, {
    targetId: 2,
    type: 1,
    fn: onClick
  }], [{
    targetId: 1,
    effectFn(elRef) {
      elRef.setAttribute("value", getText())
    }
  }]);
}
function Head() {
  return [_$createBlock(_b$5, [tailwindCssText], null, null)];
}
let server = createServer({
  Body,
  Head
});
server.listen(3002);