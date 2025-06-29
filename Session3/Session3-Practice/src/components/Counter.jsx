import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    //everytime count change, this useEffect will run
    document.title = `Count: ${count}, ${name}`;
  }, [count, name]);

  useEffect(() => {
    //Only runwhen the component mounts
    document.title = `First Time`;
  }, []);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
    </div>
  );
}

export default Counter;
