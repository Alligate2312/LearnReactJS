import React from "react";

export default function PersonalInfo() {
  // Add your personal information here
  const name = "Anh";
  const age = 21; // Your age or any age
  const location = "HCM City";
  const occupation = "Student"; // or your current job

  return (
    <div className="personal-info">
      <h2>About Me</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age} years old
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Current Role:</strong> {occupation}
      </p>
      <p>
        <strong>Learning:</strong> React.js Development
      </p>
    </div>
  );
}
