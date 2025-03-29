import React from "react";
import "./About.css";
import Github from "../assets/images/Github.png"; 
import LinkedIn from "../assets/images/linkedIn.png"; 
import Reddit from "../assets/images/reddit.png"; 
import LogoCard from "./logoCard"; 

const About = () => {
    return (
        <section id="about" className="section">
            <h2 className="name">Julius Ken Pendon</h2>
            <p className="position">Software Engineer developer</p>
            <div className="about-content">
                <p>Hello! I'm a Software developer passionate about creating beautiful and functional websites.</p>
                <p>I specialize in React, JavaScript, and modern web development.</p>
            </div>
           <div className="logo">
           <LogoCard
          logoImage={Github}
          link="https://github.com/Jkpendon17"
          width="55px"
          height="55px"
        />
        <LogoCard
          logoImage={LinkedIn}
          link="https://linkedin.com/in/yourprofile"
          width="55px"
          height="55px"
        />
        <LogoCard
          logoImage={Reddit}
          link="https://reddit.com/user/yourprofile"
          width="55px"
          height="55px"
        />
</div>
        </section>
    );
};

export default About;