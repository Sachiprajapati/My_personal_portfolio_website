import React, { useEffect, useState } from 'react';
import './CircularSkillBar.css';

const CircularSkillBar = ({ skillName, percentage, color }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => { setTimeout(() => setProgress(percentage), 200); }, [percentage]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-skill-bar">
      <svg>
        <circle
          className="circle-bg"
          cx="70" cy="70" r={radius}
        />
        <circle
          className="circle-progress"
          cx="70" cy="70" r={radius}
          style={{
            strokeDasharray: `${circumference}px`,
            strokeDashoffset: `${dashOffset}px`,
            stroke: color
          }}
        />
      </svg>
      <div className="skill-text">
        <h3>{skillName}</h3>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default CircularSkillBar;