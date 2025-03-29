import React from 'react';
import './logoCard.css';

const LogoCard = ({ logoImage, link, width , height  }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="logo-link">
      <img 
        src={logoImage} 
        alt="social logo" 
        style={{ 
          width: width,
          height: height,
          display: 'block' // Removes extra space under image
        }}
        className="logo-img"
      />
    </a>
  );
};

export default LogoCard;