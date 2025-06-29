import React from "react";
import { useState, useEffect } from "react";

function ActivityTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [sessionTime, setSessionTime] = useState(0);

  // TODO: Effect 1 - Track mouse movement
  // - Add mousemove event listener to document
  // - Update mousePosition state
  // - Clean up event listener
  // - Dependencies: [] (mount only)
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // TODO: Effect 2 - Track online/offline status
  // - Add 'online' and 'offline' event listeners to window
  // - Update isOnline state
  // - Clean up event listeners
  // - Dependencies: [] (mount only)

  // TODO: Effect 3 - Session timer
  // - Increment sessionTime every second
  // - Only when component is mounted
  // - Clean up interval
  // - Dependencies: [] (mount only)

  // TODO: Effect 4 - Log click count changes
  // - Console.log whenever clickCount changes
  // - No cleanup needed
  // - Dependencies: [clickCount]

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="activity-card" onClick={handleClick}>
      <h3>👆 Activity Tracker</h3>
      <div className="activity-stats">
        <p>
          <strong>Mouse:</strong> ({mousePosition.x}, {mousePosition.y})
        </p>
        <p>
          <strong>Clicks:</strong> {clickCount}
        </p>
        <p>
          <strong>Connection:</strong> {isOnline ? "🟢 Online" : "🔴 Offline"}
        </p>
        <p>
          <strong>Session:</strong> {sessionTime}s
        </p>
      </div>
      <p>
        <em>Click anywhere on this card to increase click count!</em>
      </p>
    </div>
  );
}

export default ActivityTracker;
