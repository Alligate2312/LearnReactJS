import React, { useEffect, useState } from "react";

export default function RaceConditionExample() {
    const [query, setQuery] = useState("1");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            if (!query) return;

            setLoading(true);
            setResult(null);

            // Example to show race condition
            // if (query === "1") {
            //     await new Promise(resolve => setTimeout(resolve, 5000)); // - Delay 5 seconds to see the loading
            // }

            // Each query triggers a new fetch
            fetch(`https://jsonplaceholder.typicode.com/posts/${query}`)
                .then(res => res.json())
                .then(data => {
                    setResult(data);
                    setLoading(false);
                });
        }
        fetchPost();
    }, [query]);

    // Handle race condition:
    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     const fetchPost = async () => {
    //         setLoading(true);
    //         setResult(null);

    //         if (query === "1") {
    //             await new Promise(resolve => setTimeout(resolve, 5000)); // - Delay 5 seconds to see the loading
    //         }

    //         fetch(`https://jsonplaceholder.typicode.com/posts/${query}`, { signal })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setResult(data);
    //                 setLoading(false);
    //             })
    //             .catch(err => {
    //                 if (err.name !== "AbortError") {
    //                     console.error("Fetch error:", err);
    //                 }
    //             });
    //     }
    //     fetchPost();

    //     return () => controller.abort(); // Cancel previous request on cleanup
    // }, [query]);

    return (
        <div>
            <h2>Search Post by ID (1–100)</h2>
            <input
                type="number"
                value={query}
                min={1}
                max={100}
                onChange={e => setQuery(e.target.value)}
            />

            {loading && <p>Loading...</p>}

            {result && (
                <div style={{ marginTop: "1rem" }}>
                    <h3>{result.title}</h3>
                    <p>{result.body}</p>
                </div>
            )}
        </div>
    );
}
