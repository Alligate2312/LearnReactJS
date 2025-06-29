import React, { useEffect, useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); // ← Runs every time `color` changes

  return (
    <div>
      <p>Choose background color:</p>
      <button onClick={() => setColor("white")}>White</button>
      <button onClick={() => setColor("lightblue")}>Light Blue</button>
      <button onClick={() => setColor("lightgreen")}>Light Green</button>
    </div>
  );
}
