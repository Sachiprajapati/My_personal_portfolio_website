

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/aboutme';
import './components/navbar.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactCardFlip from 'react-card-flip';
import {motion} from 'framer-motion';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      flipCard();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className="cursor-dot"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`
        }}
      ></div>

      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content"></div>

      <div className={`page-wrapper ${isHomePage ? 'no-scroll' : ''}`}>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="card" onMouseEnter={flipCard}>
                  <div className="profile">
                    <img src="/my1.jpg" alt="sachi" />
                  </div>
                </div>

                <div className="card card-back" onMouseLeave={flipCard}>
                  <div className="profile">
                    <img src="/2.png" alt="sachi-back" />
                  </div>
                </div>
              </ReactCardFlip>

              <motion.h1
                className="name"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <center className="main">Greetings! I am Sachi Prajapati</center>
              </motion.h1>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <center>This portfolio showcases my work, creativity, and growth — take a look around!</center>
              </motion.h3>

              <motion.div
                className="action-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <center>
                  <motion.a
                    href="/projects"
                    className="action-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="action-button contact-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.a>
                </center>
              </motion.div>
            </>
          } />

          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;



