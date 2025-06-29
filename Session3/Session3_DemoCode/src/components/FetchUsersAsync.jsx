import React, { useEffect, useState } from "react";

export default function FetchUsersAsync() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); // call async function inside useEffect
  }, []); // ← Runs once on mount

  // Note: You can’t make the useEffect callback itself async.
  // Instead, define an async function inside the effect and then call it.

  if (loading) return <p>Loading users...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
