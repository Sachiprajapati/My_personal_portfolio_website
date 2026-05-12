import React from 'react';
import './aboutme.css';
import CircularSkillBar from './CircularSkillBar';

const AboutMe = () => {
  const skills = [
    { name: 'JavaScript', percentage: 70, color: '#F7DF1E' },
    { name: 'React', percentage: 75, color: '#61DAFB' },
    { name: 'CSS', percentage: 80, color: '#264DE4' },
    { name: 'HTML', percentage: 85, color: '#E34F26' },
    { name: 'C', percentage: 75, color: '#9e708a' },
    { name: 'C++', percentage: 70, color: '#2a94a7' },
    { name: 'python', percentage: 75, color: 'red' }
  ];

  return (
    <div className="about-me">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="avatar-blob">Hello!</div>
        <div className="about-text">
          <p>
            I'm a last-year Information Technology student. I'm passionate about building websites that 
            combine creativity and functionality. I enjoy bringing ideas to life through clean, 
            user-friendly designs. With a strong focus on teamwork and collaboration, 
            I work well in group settings and contribute effectively to shared goals. 
            I'm also skilled in documentation, ensuring every project is well-organized and 
            easy to understand.


          </p>
          <p>
            My journey has equipped me with foundations in JavaScript, React, and CSS.
            I'm excited to bring creativity and technical skill to the next challenge.
          </p>
        </div>
      </div>
      <div className="skills-section">
        <h3 className="skills-title">Technical Skills</h3>
        <p className="skills-subtitle">Technologies I've mastered during my educational journey</p>
        <div className="skill-bars-container">
          {skills.map((skill, i) => (
            <CircularSkillBar
              key={i}
              skillName={skill.name}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>
      </div>
      <div className="soft-skills-section">
        <h3 className="skills-title">Soft Skills</h3>
        <p className="skills-subtitle">Traits that help me collaborate and contribute effectively</p>
        <ul className="soft-skills-list">
          <li>🗣️ Clear Communication</li>
          <li>🤝 Teamwork</li>
          <li>😊 Professional Etiquette</li>
          <li>❤️ Creativity & Innovation</li>
          <li>⏰ Time Management</li>
        </ul>
      </div>
      <div className="education-section">
  <h3 className="skills-title">Education</h3>
  <p className="skills-subtitle">Institutions that shaped my learning journey</p>

  <div className="education-card">
    <h4>🏫 Schooling – Mount Carmel High School, Gandhinagar</h4>
    <p>
      My school laid the foundation for my discipline, curiosity, and communication. I developed a love for learning, built strong moral values, and actively participated in team activities and academic competitions.
    </p>
  </div>

  <div className="education-card">
    <h4>🎓 College – LDRP Institute of Technology and Research, Gandhinagar</h4>
    <p>
      My college has played a key role in shaping my technical skills, creativity, and professional mindset. It provided me with opportunities to explore real-world projects, collaborate with diverse teams, and strengthen my problem-solving abilities.
    </p>
  </div>
</div>

    </div>
  );
};

export default AboutMe;