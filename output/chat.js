import * as fs from "fs";
import { useEffect, useState, useWindow, useMemo, onCleanup } from "seniman";
import { createServer } from "seniman/server";
import { proxy, subscribe } from "valtio";
import { subscribeKey } from "valtio/utils";
import { createClient } from "@supabase/supabase-js";
import { randomize, getScore, answeredBefore } from "./questions.js";
import { _createBlock as _$createBlock, _createComponent as _$createComponent, useMemo as _useMemo$, _declareBlock as _$declareBlock, _declareClientFunction as _$declareClientFunction } from "seniman";
const _c$1 = _$declareClientFunction({
  argNames: [],
  body: "{\n  const VIEWPORT_VS_CLIENT_HEIGHT_RATIO = 0.75;\n  window.visualViewport.addEventListener(\"resize\", event => {\n    let typingModeShouldBeEnabled = event.target.height * event.target.scale / window.screen.height < VIEWPORT_VS_CLIENT_HEIGHT_RATIO;\n    this.serverFunctions[0](typingModeShouldBeEnabled);\n  });\n}"
});
const _c$2 = _$declareClientFunction({
  argNames: [],
  body: "{\n  setTimeout(() => {\n    const messages = document.getElementById(\"messages\");\n    messages.scrollTop = messages.scrollHeight;\n  });\n}"
});
const _c$3 = _$declareClientFunction({
  argNames: [],
  body: "{\n  setTimeout(() => {\n    window.scrollTo(0, 0);\n  }, 200);\n}"
});
const _c$4 = _$declareClientFunction({
  argNames: [],
  body: "{\n  setTimeout(() => {\n    const messages = document.getElementById(\"messages\");\n    messages.scrollTop = messages.scrollHeight;\n  }, 200);\n}"
});
const _c$5 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  this.serverFunctions[0](e.target.value);\n  this.serverFunctions[1](false);\n}"
});
const _c$6 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  this.serverFunctions[0](e.target.value);\n}"
});
const _c$7 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  if (e.key === \"Enter\") {\n    this.serverFunctions[0](e.target.value);\n    this.serverFunctions[1]();\n    e.target.value = \"\";\n  }\n}"
});
const _b$1 = _$declareBlock({
  templateBuffer: "ABtBAgBMcmVsYXRpdmUgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1zdGFydCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS01MABBAgCAcmVsYXRpdmUgYmctd2hpdGUgcHgtNiBwdC0xMCBwYi04IHNoYWRvdy14bCByaW5nLTEgcmluZy1ncmF5LTkwMC81IHNtOm14LWF1dG8gbWF4LXctc2NyZWVuLWxnIHNtOnJvdW5kZWQtbGcgc206cHgtMTAgdy1mdWxsIGZsZXgDAARtYWluBAUGAABBAgAwZGl2aWRlLXkgZGl2aWRlLWdyYXktMzAwLzUwIGZsZXggZmxleC1jb2wgdy1mdWxsAMECAC9mbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBwYi02IGl0ZW1zLWNlbnRlcgDBAgASdGV4dC0yeGwgZm9udC1ib2xkAIAADEFjYWthdGEg4oaSIIAAAzwhPoAAASAHAgAadGV4dC1iYXNlIGZvbnQtbm9ybWFsIG1sLTEAgAABIAECABZ0ZXh0LTJ4bCBmb250LWJvbGQgcC0yAIAAASDBAgBOZmxleCBmbGV4LXJvdyBiZy1uZXV0cmFsLTUwIG92ZXJmbG93LXktaGlkZGVuIGgtMjAgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBweC00AwALbGVhZGVyYm9hcmQEAADBAIAAAzwhPgAAByBvbmxpbmUAAAEggAABIIECAG9zcGFjZS15LTIgcHktOCB0ZXh0LWJhc2UgbGVhZGluZy03IHRleHQtZ3JheS02MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IG92ZXJmbG93LXktYXV0byBmbGV4LTEDAAhtZXNzYWdlcwCAAAEgQQIAMHB0LTggdGV4dC1iYXNlIGxlYWRpbmctNyBmbGV4IGZsZXgtcm93IHNwYWNlLXgtNAMAB2FjdGlvbnMEAACBAgAvZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIAgAABIIgJAAdNZXNzYWdlCgAEdGV4dAIANGJvcmRlciByb3VuZGVkLWxnIGJvcmRlci1uZXV0cmFsLTc1IHB4LTQgcHktMiB3LWZ1bGwAgAABIEsCADlwLTQgYmctd2hpdGUgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1uZXV0cmFsLTUwIHJvdW5kZWQtbGcAAAAEU2VuZA==",
  elScriptBuffer: "FwH/AQABAQECAQMCBAIFAgYCAwIIAgICCgELAQwCCwIOAg8CEAERAhICEwIUAhUIAwUDBQf/Cf8MDQv/D/8S/wYACxESFBY=",
  tokens: ["div", "class", "id", "style", "height", "100vh", "span", "input", "placeholder", "type", "button"]
});
const _b$2 = _$declareBlock({
  templateBuffer: "AAVBAgBiIGJnLW5ldXRyYWwtNTAwIHRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyByb3VuZGVkLWxnIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xIHB4LTMgcmVsYXRpdmUAgQCAAAEggQIAEmZvbnQtc2VtaWJvbGQgbWwtMQAAAAEg",
  elScriptBuffer: "AwH/AgACAQMA/wL///8A",
  tokens: ["div", "class"]
});
const _b$3 = _$declareBlock({
  templateBuffer: "AAEBAgBVdy0zIGgtMyBiZy1ncmVlbi01MDAgYWJzb2x1dGUgLXRvcC0xIC1yaWdodC0xIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItbmV1dHJhbC01MAA=",
  elScriptBuffer: "AAAA",
  tokens: ["div", "class"]
});
const _b$4 = _$declareBlock({
  templateBuffer: "AANBAgAiYmctbmV1dHJhbC01MCBweS0yIHB4LTMgcm91bmRlZC1sZwCBAgANZm9udC1zZW1pYm9sZAAAAAEg",
  elScriptBuffer: "AQH/AgD///8A",
  tokens: ["div", "class"]
});
const _b$5 = _$declareBlock({
  templateBuffer: "AAEBAgAEdGV4dAMANGJvcmRlciByb3VuZGVkLWxnIGJvcmRlci1uZXV0cmFsLTc1IHB4LTQgcHktMiB3LWZ1bGwA",
  elScriptBuffer: "AAAA",
  tokens: ["input", "type", "class"]
});
const _b$6 = _$declareBlock({
  templateBuffer: "AAEBAA==",
  elScriptBuffer: "AAH//wA=",
  tokens: ["style"]
});
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const tailwindCssText = fs.readFileSync("./output/output.css", "utf8");
const state = proxy({
  messages: [],
  online: [],
  answers: [],
  leaderboard: [],
  timer: 0,
  question: randomize()
});
supabase.from("leaderboard").select().then(({
  data
}) => {
  state.leaderboard = data;
}).catch(e => console.error(e));
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
  let _handle = value => {
    // TODO: false value from the client is currently sent as empty string
    setTypingModeEnabled(!!value);
  };
  window.clientExec({
    clientFnId: _c$1,
    serverBindFns: [_handle]
  });
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
  const updateUserName = name => {
    window.setCookie("__acakata_user", name);
  };
  const unsubscribeMessage = subscribeKey(state, "messages", messages => {
    setMessages(messages);
    window.clientExec({
      clientFnId: _c$2
    });
  });
  const unsubscribe = subscribe(state, () => {
    setTimer(state.timer);
    setQuestion(state.question);
    setLeaderboard(state.leaderboard);
    setOnline(state.online);
  });
  useEffect(() => {
    if (!typingModeEnabled()) {
      window.clientExec({
        clientFnId: _c$3
      });
    }
  });
  window.clientExec({
    clientFnId: _c$4
  });
  onCleanup(() => {
    unsubscribe();
    unsubscribeMessage();
    state.online = state.online.filter(online => online !== getMe());
  });
  useEffect(() => {
    if (!state.online.includes(getMe())) {
      state.online = [...state.online, getMe()];
    }
  });
  const addScore = async (player, score) => {
    const {
      data: currentData
    } = await supabase.from("leaderboard").select().eq("player", player);
    const upsertPayload = {
      player,
      score: !currentData.length ? score : parseInt(currentData[0]?.score + score)
    };
    await supabase.from("leaderboard").upsert(upsertPayload);
    const {
      data
    } = await supabase.from("leaderboard").select();
    state.leaderboard = data;
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
  return _$createBlock(_b$1, [() => getQuestion()?.randomAnswer, () => " ", () => getQuestion()?.question, () => TIMER_LIMIT - getTimer(), () => getOnline().length, () => (getLeaderboard() || []).sort((a, b) => b.score - a.score).map(leaderboard => {
    const isOnline = getOnline().includes(leaderboard.player);
    return _$createBlock(_b$2, [() => leaderboard.player, () => leaderboard.score, () => isOnline ? _$createBlock(_b$3, null, null, null) : null], null, null);
  }), () => getMessages().map(message => {
    return _$createBlock(_b$4, [() => message.player, () => message.message], null, null);
  }), () => !getEditMe() ? getMe() : _$createBlock(_b$5, null, [{
    targetId: 255,
    type: 3,
    fn: {
      clientFnId: _c$5,
      serverBindFns: [updateUserName, setEditMe]
    }
  }], [{
    targetId: 255,
    effectFn(elRef) {
      elRef.setAttribute("value", getMe())
    }
  }])], [{
    targetId: 3,
    type: 1,
    fn: () => setEditMe(true)
  }, {
    targetId: 4,
    type: 3,
    fn: {
      clientFnId: _c$6,
      serverBindFns: [setText]
    }
  }, {
    targetId: 4,
    type: 6,
    fn: {
      clientFnId: _c$7,
      serverBindFns: [setText, onClick]
    }
  }, {
    targetId: 5,
    type: 1,
    fn: onClick
  }], [{
    targetId: 0,
    effectFn(elRef) {
      elRef.setStyleProperty("padding-top", typingModeEnabled() ? "450px" : "24px")
    }
  }, {
    targetId: 1,
    effectFn(elRef) {
      elRef.setStyleProperty("display", typingModeEnabled() ? "none" : "inherit")
    }
  }, {
    targetId: 2,
    effectFn(elRef) {
      elRef.setStyleProperty("padding-bottom", typingModeEnabled() ? "0" : "80px")
    }
  }, {
    targetId: 4,
    effectFn(elRef) {
      elRef.setAttribute("value", getText())
    }
  }]);
}
function Head() {
  return [_$createBlock(_b$6, [tailwindCssText], null, null)];
}
let server = createServer({
  Body,
  Head
});
server.listen(3002);