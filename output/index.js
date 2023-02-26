import { useEffect, useState } from "seniman";
import { createServer } from "seniman/server";
import { proxy, subscribe } from "valtio";
import { _createBlock as _$createBlock, _createComponent as _$createComponent, useMemo as _useMemo$, _declareBlock as _$declareBlock, _declareClientFunction as _$declareClientFunction } from "seniman";
const _b$1 = _$declareBlock({
  templateBuffer: "AAZBAgALaGVsbG8td29ybGQAgAANSGVsbG8gV29ybGQhIIAAAzwhPoAAASBDAAAABUFkZCAr",
  elScriptBuffer: "BAH/AgACAQICAf8BAQM=",
  tokens: ["div", "class", "button"]
});
const state = proxy({
  count: 0
});
function Body() {
  let [getCount, setCount] = useState(state.count);
  useEffect(() => {
    const unsubscribe = subscribe(state, () => setCount(state.count));
    return () => unsubscribe();
  }, []);
  let onClick = () => state.count++;
  return _$createBlock(_b$1, [() => getCount()], [{
    targetId: 0,
    type: 1,
    fn: onClick
  }], null);
}
let server = createServer({
  Body
});
server.listen(3002);