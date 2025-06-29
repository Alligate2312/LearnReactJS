import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, []); // ← Start once on mount

  return <p>Timer: {seconds} seconds</p>;
}
