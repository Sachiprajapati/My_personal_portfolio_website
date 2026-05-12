
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="logo-container">
          <div className="logo">
            <span className="lotus-icon">✤</span>
          </div>
        </div>
        <h1>Contact Me!</h1>
      </div>
      
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="phone-icon">📞</i>
          </div>
          <p>9510428378</p>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="email-icon">✉️</i>
          </div>
          <p>prajapatisachi384@gmail.com</p>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="location-icon">📍</i>
          </div>
          <p>Gandhinagar,Gujarat</p>
        </div>
      </div>
      
      <div className="connect-text">
        <p>CONNECT WITH ME!</p>
      </div>
      
      <div className="social-icons">
        <a href="http://linkedin.com/in/sachi-prajapati-741445289" className="social-icon">
          <i className="linkedin-icon">🔗</i>
        </a>
        <a href="#" className="social-icon">
          <i className="github-icon">🔘</i>
        </a>
        <a href="#" className="social-icon">
          <i className="twitter-icon">🐦</i>
        </a>
      </div>
    </div>
  );
};

export default Contact;