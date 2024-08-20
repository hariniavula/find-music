import React from 'react';
import './About.css';
import about from "./assets/about.jpg"



const Button = ({ link, children }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};


const About = () => {
  return (
    <div className = "entire-about">
    <div id = "title" className="about">
      <div className="about-text">
        <h1>About Me</h1>
        <br/>
        <p>Hi! My name is Harini. I'm a sophomore studying computer science and economics at Northeastern University. My favorite types of music are folk, pop, and country! I created this site because I'm always on the lookout for up-and-coming artists.</p>
          <p>If you would like to connect with me or learn more about my work and interests, please visit my website.</p>
          <Button link="https://hariniavula.github.io/harini-website/">Visit My Website</Button>
      </div>
      <img src={about}alt="Harini Profile" className="about-image" />

    </div>
    </div>
  );
}

export default About;
