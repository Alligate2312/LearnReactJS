import React from "react";

function Skills() {
  // Array of your current skills
  const currentSkills = ["HTML", "CSS", "JavaScript"];
  const learningSkills = ["React", "Node.js", "MongoDB"];

  return (
    <div className="skills">
      <h2>My Skills</h2>

      <div className="current-skills">
        <h3>What I Know:</h3>
        <ul>
          {currentSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="learning-skills">
        <h3>What I'm Learning:</h3>
        <ul>
          {learningSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
