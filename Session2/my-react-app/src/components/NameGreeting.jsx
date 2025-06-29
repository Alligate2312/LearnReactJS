import React, { useState } from "react";

function NameGreeting() {
  const [name, setName] = useState("");
  const greeting =
    name.length == 0
      ? "Hello, stranger!"
      : name.length < 4
      ? `Hello, ${name}!`
      : `Welcome, ${name}! Nice to meet you!`;

  const inputTextLimit = (inputText) => {
    if (inputText.length <= 20) {
      setName(inputText);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          maxLength={20}
          // value={name}
          onChange={(e) => inputTextLimit(e.target.value)}
        />
        <input type="reset" value="Reset" />
      </form>
      <h3>{greeting}</h3>
      <p>Remaining Text: {20 - name?.length}</p>
    </div>
  );
}

export default NameGreeting;
