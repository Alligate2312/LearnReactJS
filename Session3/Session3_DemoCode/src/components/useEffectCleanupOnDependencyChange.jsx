import React, { useEffect, useState } from "react";

export default function DebouncedInput() {
  const [input, setInput] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(input);
    }, 1000); // Wait 500ms before applying

    return () => {
      clearTimeout(timeout); // Cancel if input changes quickly
    };
  }, [input]); // ← Re-run if `input` changes

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced value: {debounced}</p>
    </div>
  );
}