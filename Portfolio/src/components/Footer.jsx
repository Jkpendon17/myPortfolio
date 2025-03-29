import React from 'react';
import { FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a 
            href="https://github.com/Jkpendon17" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/julius-ken-pendon-b292a2198/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a 
            href="https://www.reddit.com/user/Subject_Home_2239/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Reddit"
          >
            <FaReddit className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;