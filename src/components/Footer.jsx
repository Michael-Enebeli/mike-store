import React from 'react';
import "../styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer>
      
      <p>&copy; 2025 Myke-store. All rights reserved.</p>
      <hr className="footer-line" />
       <div className="footer-icons">
        <a href="tel:+2348107792905" title="Call us">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:chukwudienebeli81@gmail.com" title="Email us">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/michael-enebeli" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/michael-enebeli" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <span>Developed by  <a href="https://michaelenebeli.com.ng" target="_blank" rel="noopener noreferrer"> Michael Enebeli </a></span>
  
    </footer>
  );
};

export default Footer;
