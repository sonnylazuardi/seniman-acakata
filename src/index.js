import { useEffect, useState } from "seniman";
import { createServer } from "seniman/server";

import { proxy, subscribe } from "valtio";

const state = proxy({ count: 0 });

function Body() {
  let [getCount, setCount] = useState(state.count);
  useEffect(() => {
    const unsubscribe = subscribe(state, () => setCount(state.count));
    return () => unsubscribe();
  }, []);

  let onClick = () => state.count++;

  return (
    <div class="hello-world">
      Hello World! {getCount()}
      <button onClick={onClick}>Add +</button>
    </div>
  );
}

let server = createServer({ Body });

server.listen(3002);
