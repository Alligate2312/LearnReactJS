import React, { useEffect, useState } from "react";

export default function MountExample() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const now = new Date().toLocaleTimeString();
        setTime(now);
    }, []); // ← Only runs once when component mounts

    return <p>Component mounted at: {time}</p>;
}
