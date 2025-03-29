import React from 'react';
import "./Header.css";



const Header = () => {

  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav className='NavBar'>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;