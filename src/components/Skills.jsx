import React, { useEffect, useState } from 'react';
const Skills = () => {
  const [skills, setSkills] = useState({
    html: 0,
    css: 0,
    javascript: 0,
    bootstrap: 0,
    react: 0,
    tailwind: 0,
    nextjs: 0,
    mongodb: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setSkills({
        html: 100,
        css: 70,
        javascript: 50,
        bootstrap: 70,
        react: 60,
        tailwind: 60,
        nextjs: 40,
        mongodb: 40,
      });
    }, 500);
  }, []);

  return (
    <div className="container">
      <h1 className="about">Skills</h1>
      <div className="skills-section">
        <div className="skills-column">
          <h2>Front-End Skills</h2>
          <div className="skill">
            <p>HTML</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.html}%` }}>
                &nbsp;&nbsp; {skills.html}%
              </div>
            </div>
          </div>
          <div className="skill">
            <p>CSS</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.css}%` }}>
                &nbsp;&nbsp; {skills.css}%
              </div>
            </div>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.javascript}%` }}>
                &nbsp;&nbsp; {skills.javascript}%
              </div>
            </div>
          </div>
          <div className="skill">
            <p>Bootstrap</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.bootstrap}%` }}>
                &nbsp;&nbsp; {skills.bootstrap}%
              </div>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <h2>Back-End Skills</h2>
          <div className="skill">
            <p>React</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.react}%` }}>
                &nbsp;&nbsp; {skills.react}%
              </div>
            </div>
          </div>
          <div className="skill">
            <p>Tailwind</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.tailwind}%` }}>
                &nbsp;&nbsp; {skills.tailwind}%
              </div>
            </div>
          </div>
          <div className="skill">
            <p>Next.js</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.nextjs}%` }}>
                &nbsp;&nbsp; {skills.nextjs}%
              </div>
            </div>
          </div>
          <div className="skill">
            <p>MongoDB</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skills.mongodb}%` }}>
                &nbsp;&nbsp; {skills.mongodb}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
