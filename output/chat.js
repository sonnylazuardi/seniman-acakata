import * as fs from "fs";
import { useEffect, useState, useWindow } from "seniman";
import { createServer } from "seniman/server";
import { proxy, subscribe } from "valtio";
import { _createBlock as _$createBlock, _createComponent as _$createComponent, useMemo as _useMemo$, _declareBlock as _$declareBlock, _declareClientFunction as _$declareClientFunction } from "seniman";
const _c$1 = _$declareClientFunction({
  argNames: [],
  body: "{\n  setTimeout(() => {\n    const messages = document.getElementById(\"messages\");\n    messages.scrollTop = messages.scrollHeight;\n  });\n}"
});
const _c$2 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  this.serverFunctions[0](e.target.value);\n}"
});
const _b$1 = _$declareBlock({
  templateBuffer: "AA5BAgBhcmVsYXRpdmUgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1zdGFydCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS01MCBweS02IHNtOnB5LTQgc206cHgtNgBBAgB7cmVsYXRpdmUgYmctd2hpdGUgcHgtNiBwdC0xMCBwYi04IHNoYWRvdy14bCByaW5nLTEgcmluZy1ncmF5LTkwMC81IHNtOm14LWF1dG8gbWF4LXctc2NyZWVuLWxnIHNtOnJvdW5kZWQtbGcgc206cHgtMTAgdy1mdWxsAEECAA5teC1hdXRvIHctZnVsbABBAgAbZGl2aWRlLXkgZGl2aWRlLWdyYXktMzAwLzUwAMECABdtYi02IHRleHQtNXhsIGZvbnQtYm9sZAAAAAdBY2FrYXRhgAABIIECAG1zcGFjZS15LTIgcHktOCB0ZXh0LWJhc2UgbGVhZGluZy03IHRleHQtZ3JheS02MDAgZmxleCBmbGV4LWNvbCBoLTk2IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgb3ZlcmZsb3cteS1hdXRvAwAIbWVzc2FnZXMAgAABIEECADBwdC04IHRleHQtYmFzZSBsZWFkaW5nLTcgZmxleCBmbGV4LXJvdyBzcGFjZS14LTQAhAUABHRleHQCADRib3JkZXIgcm91bmRlZC1sZyBib3JkZXItbmV1dHJhbC03NSBweC00IHB5LTIgdy1mdWxsAIAAASBGAgA5cC00IGJnLXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctbmV1dHJhbC01MCByb3VuZGVkLWxnAAAABFNlbmQ=",
  elScriptBuffer: "CwH/AQABAQECAgMCBAIFAgYBBwIIAgkBBf8CCAo=",
  tokens: ["div", "class", "id", "input", "type", "button"]
});
const _b$2 = _$declareBlock({
  templateBuffer: "AANBAgAiYmctbmV1dHJhbC01MCBweS0yIHB4LTMgcm91bmRlZC1sZwCBAgANZm9udC1zZW1pYm9sZAAAAAEg",
  elScriptBuffer: "AQH/AgD///8A",
  tokens: ["div", "class"]
});
const _b$3 = _$declareBlock({
  templateBuffer: "AAEBAA==",
  elScriptBuffer: "AAH//wA=",
  tokens: ["style"]
});
const tailwindCssText = fs.readFileSync("./dist/output.css", "utf8");
const state = proxy({
  messages: [{
    player: "John",
    message: "hello"
  }, {
    player: "Maxwell",
    message: "world"
  }],
  players: []
});
const CHAT_LIMIT = 10;
function Body() {
  let window = useWindow();
  let [getText, setText] = useState("");
  let [getMessages, setMessages] = useState(state.messages);
  useEffect(() => {
    const unsubscribe = subscribe(state, () => {
      setMessages(state.messages);
      window.clientExec({
        clientFnId: _c$1
      });
    });
    return () => unsubscribe();
  }, []);
  let onClick = () => {
    if (getText() !== "") {
      state.messages = [...state.messages.filter((_, i) => state.messages.length - i <= CHAT_LIMIT), {
        player: "Random",
        message: getText()
      }];
      setText("");
    }
  };
  return _$createBlock(_b$1, [() => getMessages().map((message, i) => {
    return _$createBlock(_b$2, [() => message.player, () => message.message], null, [{
      targetId: 255,
      effectFn(elRef) {
        elRef.setAttribute("key", i)
      }
    }]);
  })], [{
    targetId: 0,
    type: 3,
    fn: {
      clientFnId: _c$2,
      serverBindFns: [setText]
    }
  }, {
    targetId: 1,
    type: 1,
    fn: onClick
  }], [{
    targetId: 0,
    effectFn(elRef) {
      elRef.setAttribute("value", getText())
    }
  }]);
}
function Head() {
  return [_$createBlock(_b$3, [tailwindCssText], null, null)];
}
let server = createServer({
  Body,
  Head
});
server.listen(3002);