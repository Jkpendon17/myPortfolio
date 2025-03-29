import React from 'react';


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
    </>
  );
};

export default Footer;