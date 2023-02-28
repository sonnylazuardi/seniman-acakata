import { _createBlock as _$createBlock, _createComponent as _$createComponent, useMemo as _useMemo$, _declareBlock as _$declareBlock, _declareClientFunction as _$declareClientFunction } from "seniman";
const _c$3 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  if (e.key === \"Enter\") {\n    this.serverFunctions[0](e.target.value);\n    this.serverFunctions[1](false);\n  }\n}"
});
const _c$2 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  this.serverFunctions[0](e.target.value);\n}"
});
const _c$1 = _$declareClientFunction({
  argNames: ["e"],
  body: "e.preventDefault()"
});
const _b$1 = _$declareBlock({
  templateBuffer: "ADZBAgBwYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS0yMCB6LTUwIHAtNABBAgA3Ymctd2hpdGUgbWF4LXctc2NyZWVuLW1kIHctZnVsbCBwLTQgcm91bmRlZC1sZyByZWxhdGl2ZQDBAgAWYWJzb2x1dGUgdG9wLTIgcmlnaHQtMgBDAgAccC0yIGJnLW5ldXRyYWwtNTAgcm91bmRlZC1sZwBEBQAaaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcGAAIyNAcACTAgMCAyNCAyNAgAAjI0AAkKAAxjdXJyZW50Q29sb3ILAGVNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyegCAAAEgwQIAJm1iLTQgdGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyAAAADENhcmEgQmVybWFpboAAASDBAgAEbWItMgAAAFJNYXN1a2thbiBuYW1hIHBlbWFpbiwgc2V0ZWxhaCBtYXN1ayBiaXNhIGdhbnRpIG5hbWEgZGVuZ2FuIGtsaWsgbmFtYSBkaSBraXJpIGJhd2FogAABIMECABJmb250LXNlbWlib2xkIG1iLTEAAAALTmFtYSBwZW1haW6AAAEgjA0AC05hbWEgUGVtYWluDgAEdGV4dAIAOWJvcmRlciByb3VuZGVkLWxnIGJvcmRlci1uZXV0cmFsLTc1IHB4LTQgcHktMiB3LWZ1bGwgbWItMgCAAAEgwQIABG1iLTIAAAB9SmF3YWIgcGVydGFueWFhbiBkYWxhbSAxNSBkZXRpayBzZXN1YWkgcGV0dW5qdWsgZGFuIGthdGEgYWNhayBkaSBhdGFzLiBQZW1haW4gdGVyY2VwYXQgYWthbiBtZW5kYXBhdGthbiBza29yIHNlcGVydGkgYmVyaWt1dC6AAAEgzwIAE2xpc3QtZGlzYyBwbC00IG1iLTIA0ACAABJUZXJjZXBhdCBwZXJ0YW1hOiBRAgANZm9udC1zZW1pYm9sZAAAAAMrMTCAAAEg0ACAABBUZXJjZXBhdCBrZWR1YTogUQIADWZvbnQtc2VtaWJvbGQAAAACKzWAAAEgUACAAAlTaXNhbnlhOiBRAgANZm9udC1zZW1pYm9sZAAAAAIrMYAAASDBAgAEbWItNAAAAD5QZW1haW4gZGVuZ2FuIHNrb3IgdGVyYmFueWFrIGFrYW4gdGVybGloYXQgZGkgcGFwYW4gcGVyaW5na2F0LoAAASDBAgAabWItMiB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQAAAAGQ29udG9ogAABIE8CABNsaXN0LWRpc2MgcGwtNCBtYi0yANAAgAAMUGVydGFueWFhbjog0QIADWZvbnQtc2VtaWJvbGQAAAAFUkFCVEEAACAgQXJhaCBqYW0gOSBpdHUgc2FtYSBkZW5nYW4gYXJhaIAAASBQAIAACUphd2FiYW46IFECAA1mb250LXNlbWlib2xkAAAABUJBUkFU",
  elScriptBuffer: "CwH/AQABAQIBAgMCBAIFAgYCBwIIAgkAAwACCg==",
  tokens: ["div", "class", "button", "svg", "xmlns", "height", "viewBox", "width", "path", "fill", "d", "input", "placeholder", "type", "ul", "li", "span"]
});
function Onboarding({
  userName,
  updateUserName,
  setShowOnboard
}) {
  return _$createBlock(_b$1, null, [{
    targetId: 255,
    type: 1,
    fn: () => setShowOnboard(false)
  }, {
    targetId: 0,
    type: 1,
    fn: {
      clientFnId: _c$1
    }
  }, {
    targetId: 1,
    type: 1,
    fn: () => setShowOnboard(false)
  }, {
    targetId: 2,
    type: 3,
    fn: {
      clientFnId: _c$2,
      serverBindFns: [updateUserName]
    }
  }, {
    targetId: 2,
    type: 6,
    fn: {
      clientFnId: _c$3,
      serverBindFns: [updateUserName, setShowOnboard]
    }
  }], [{
    targetId: 2,
    effectFn(elRef) {
      elRef.setAttribute("value", userName)
    }
  }]);
}
export default Onboarding;