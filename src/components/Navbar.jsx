// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <div className="navbar-left">
//         <img src="/logo.png" alt="Logo" className="navbar-logo" />
//       </div>
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         <Link to="/about">About Me</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
