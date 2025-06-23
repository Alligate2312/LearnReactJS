import React from "react";

function BrokenProfile() {
  const name = "John Doe";
  const age = 25;
  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <div>
      <h1>Hello, I'm {name}</h1>
      <p class="intro">I'm {age} years old</p>
      <img src="profile.jpg" alt="Profile photo" />
      <h3>My Skills:</h3>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
      <input type="text" placeholder="Your name" />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" />
    </div>
  );
}

export default BrokenProfile;
