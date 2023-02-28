import { _createBlock as _$createBlock, _createComponent as _$createComponent, useMemo as _useMemo$, _declareBlock as _$declareBlock, _declareClientFunction as _$declareClientFunction } from "seniman";
const _c$2 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  if (e.key === \"Enter\") {\n    this.serverFunctions[0](e.target.value);\n    this.serverFunctions[1](false);\n  }\n}"
});
const _c$1 = _$declareClientFunction({
  argNames: ["e"],
  body: "{\n  this.serverFunctions[0](e.target.value);\n}"
});
const _b$1 = _$declareBlock({
  templateBuffer: "AE9BAgBwYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS0yMCB6LTUwIHAtNABBAgBXYmctd2hpdGUgbWF4LXctc2NyZWVuLW1kIHctZnVsbCBwLTQgcm91bmRlZC1sZyByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvAwQFAADBAgAWYWJzb2x1dGUgdG9wLTIgcmlnaHQtMgBGAgAccC0yIGJnLW5ldXRyYWwtNTAgcm91bmRlZC1sZwBHCAAaaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcEAAIyNAkACTAgMCAyNCAyNAoAAjI0AAsMAAxjdXJyZW50Q29sb3INAGVNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyegCAAAEgwQIAJm1iLTQgdGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyAAAADENhcmEgQmVybWFpboAAASCBAwQOAAIAGmJnLW5ldXRyYWwtMTAwIG1iLTQgdy1mdWxsAIAAASDBAgAEbWItMgAAAFJNYXN1a2thbiBuYW1hIHBlbWFpbiwgc2V0ZWxhaCBtYXN1ayBiaXNhIGdhbnRpIG5hbWEgZGVuZ2FuIGtsaWsgbmFtYSBkaSBraXJpIGJhd2FogAABIMECABJmb250LXNlbWlib2xkIG1iLTEAAAALTmFtYSBwZW1haW6AAAEgjxAAC05hbWEgUGVtYWluEQAEdGV4dAIAOWJvcmRlciByb3VuZGVkLWxnIGJvcmRlci1uZXV0cmFsLTc1IHB4LTQgcHktMiB3LWZ1bGwgbWItMgCAAAEgwQIABG1iLTIAAAB9SmF3YWIgcGVydGFueWFhbiBkYWxhbSAxNSBkZXRpayBzZXN1YWkgcGV0dW5qdWsgZGFuIGthdGEgYWNhayBkaSBhdGFzLiBQZW1haW4gdGVyY2VwYXQgYWthbiBtZW5kYXBhdGthbiBza29yIHNlcGVydGkgYmVyaWt1dC6AAAEg0gIAE2xpc3QtZGlzYyBwbC00IG1iLTIA0wCAABJUZXJjZXBhdCBwZXJ0YW1hOiBUAgANZm9udC1zZW1pYm9sZAAAAAMrMTCAAAEg0wCAABBUZXJjZXBhdCBrZWR1YTogVAIADWZvbnQtc2VtaWJvbGQAAAACKzWAAAEgUwCAAAlTaXNhbnlhOiBUAgANZm9udC1zZW1pYm9sZAAAAAIrMYAAASDBAgAEbWItNAAAAD5QZW1haW4gZGVuZ2FuIHNrb3IgdGVyYmFueWFrIGFrYW4gdGVybGloYXQgZGkgcGFwYW4gcGVyaW5na2F0LoAAASDBAgAmdGV4dC1jZW50ZXIgbWItMiB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQAAAAGQ29udG9ogAABIIEDBA4AAgAaYmctbmV1dHJhbC0xMDAgbWItNCB3LWZ1bGwAgAABINICABNsaXN0LWRpc2MgcGwtNCBtYi0yANMAgAAMUGVydGFueWFhbjog1AIADWZvbnQtc2VtaWJvbGQAAAAFUkFCVEEAACAgQXJhaCBqYW0gOSBpdHUgc2FtYSBkZW5nYW4gYXJhaIAAASBTAIAACUphd2FiYW46IFQCAA1mb250LXNlbWlib2xkAAAABUJBUkFUgAABIMECACZ0ZXh0LWNlbnRlciBtYi0yIHRleHQteGwgZm9udC1zZW1pYm9sZAAAAAlJbmZvcm1hc2mAAAEggQMEDgACABpiZy1uZXV0cmFsLTEwMCBtYi00IHctZnVsbACAAAEgUgIAE2xpc3QtZGlzYyBwbC00IG1iLTIA0wCAAAtPcGVuIFNvdXJjZYAAAzwhPoAAASBVAgAXZm9udC1zZW1pYm9sZCB1bmRlcmxpbmUWAAZfYmxhbmsXADBodHRwczovL2dpdGh1Yi5jb20vc29ubnlsYXp1YXJkaS9zZW5pbWFuLWV4YW1wbGUAAAAGR2l0aHVigAABINMAVQIAF2ZvbnQtc2VtaWJvbGQgdW5kZXJsaW5lFgAGX2JsYW5rFwAhaHR0cHM6Ly90d2l0dGVyLmNvbS9zb25ueWxhenVhcmRpAAAAB1R3aXR0ZXKAAAEgUwBVAgAXZm9udC1zZW1pYm9sZCB1bmRlcmxpbmUWAAZfYmxhbmsXADlodHRwczovL2FuYWx5dGljcy51bWFtaS5pcy9zaGFyZS9BVzFXanFRb21DcXdCQ1M4L0FjYWthdGEAAAARRGFzYm9yIFBlbmd1bmp1bmc=",
  elScriptBuffer: "IgH/AQABAQIBAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAR4BHwIgAR8hAgIM",
  tokens: ["div", "class", "style", "height", "560", "button", "svg", "xmlns", "viewBox", "width", "path", "fill", "d", "1px", "input", "placeholder", "type", "ul", "li", "span", "a", "target", "href"]
});
function Onboarding({
  userName,
  updateUserName,
  setShowOnboard
}) {
  return _$createBlock(_b$1, [() => " "], [{
    targetId: 0,
    type: 1,
    fn: () => setShowOnboard(false)
  }, {
    targetId: 1,
    type: 3,
    fn: {
      clientFnId: _c$1,
      serverBindFns: [updateUserName]
    }
  }, {
    targetId: 1,
    type: 6,
    fn: {
      clientFnId: _c$2,
      serverBindFns: [updateUserName, setShowOnboard]
    }
  }], [{
    targetId: 1,
    effectFn(elRef) {
      elRef.setAttribute("value", userName)
    }
  }]);
}
export default Onboarding;