import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null); // Added for fullscreen certificates

  const projects = [
    {
      id: 1,
      title: "Vansaarthi",
      description: "A conservation initiative focused on protecting biodiversity and promoting a sustainable future for people and nature. Working towards a thriving ecosystem for generations to come",
      technologies: ["React.js", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
      screenshot: "/vansarthi.png",
      videoSrc: "/Vansarthi.mp4"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A creative portfolio website built with React, showcasing my skills and projects.",
      technologies: ["React.js", "JavaScript (ES6+)", "JSX", "CSS", "Vite (Build tool/Development environment)"],
      screenshot: "/portfolio.png",
      videoSrc: "/portfolio.mp4"
    },
    {
      id: 3,
      title: "EleLife",
      description: "EleLife’s #IvoryFreeIndia campaign raises awareness about elephant poaching and ivory trade. With rising seizure and poaching cases, we work to protect elephants through advocacy, data-driven action, and community support.",
      technologies: ["html", "CSS", "JavaScript"],
      screenshot: "/elelife.png",
      videoSrc: "/elelife.mp4"
    }
  ];

  const toggleVideo = (id) => {
    if (activeVideo === id) {
      setActiveVideo(null);
    } else {
      setActiveVideo(id);
    }
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <p className="projects-intro">
        Here are some of the projects I've worked on. Each project demonstrates different skills and technologies I've mastered.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img
                src={project.screenshot}
                alt={project.title}
                className="project-image"
              />
              <div className="project-image-overlay">
                <button
                  className="video-button"
                  onClick={() => toggleVideo(project.id)}
                >
                  {activeVideo === project.id ? "Hide Demo" : "Watch Demo"}
                </button>
              </div>
            </div>

            {activeVideo === project.id && (
              <div className="project-video">
                <div className="video-container">
                  <video
                    controls
                    autoPlay
                    src={project.videoSrc}
                    type="video/mp4"
                    className="project-video-player"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="certificates-container">
        <h2 className="certificates-title">My Certificates</h2>
        <p className="certificates-intro">Here are some of the certificates I've earned through various courses and achievements.</p>
        <div className="certificates-grid">
          <div className="certificate-card">
            <img
              src="/certi1.jpg"
              alt="Certificate 1"
              className="certificate-image"
              onClick={() => setFullscreenImage("/certi1.jpg")}
            />
            <p className="certificate-name">Certification of C, C++, HTML, CSS, JavaScript</p>
          </div>
          <div className="certificate-card">
            <img
              src="/certi2.png"
              alt="Certificate 2"
              className="certificate-image"
              onClick={() => setFullscreenImage("/certi2.png")}
            />
            <p className="certificate-name">NPTEL - Python for Data Science</p>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen Certificate" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default Projects;
