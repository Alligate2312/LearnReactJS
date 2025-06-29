import React, { useEffect, useState } from "react";

export default function FetchPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);     // Tracks loading state
    const [error, setError] = useState(null);         // Tracks any error

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true); // Start loading
                setError(null);   // Clear previous error

                // await new Promise(resolve => setTimeout(resolve, 5000)); // - Delay 5 seconds to see the loading
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const data = await response.json();
                setPosts(data.slice(0, 5)); // Just take first 5 posts
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false); // Done loading in both success and error
            }
        };

        fetchPosts();
    }, []);

    // UI Rendering
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div>
            <h2>Latest Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong><br />
                        <small>{post.body}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
