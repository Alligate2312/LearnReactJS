import React from "react";
import { useState, useEffect } from "react";

function Timer({ isRunning, onTimeUpdate }) {
  const [seconds, setSeconds] = useState(0);

  // TODO: Add useEffect for timer interval
  // Requirements:
  // - Only run when isRunning is true
  // - Update seconds every 1000ms
  // - Clean up interval when component unmounts or isRunning changes
  // - Call onTimeUpdate with current seconds
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
  }, [isRunning]);

  return (
    <div className="timer-card">
      <h3>⏱️ Smart Timer</h3>
      <div className="timer-display">
        <span className="time">
          {Math.floor(seconds / 60)}:
          {(seconds % 60).toString().padStart(2, "0")}
        </span>
        <p>Status: {isRunning ? "🟢 Running" : "🔴 Stopped"}</p>
      </div>
    </div>
  );
}

export default Timer;
