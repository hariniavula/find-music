import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className = "entire-home">
    <div id = "title" className="home">
      <img src="/src/assets/music.jpg" alt="Artist" className="home-image" />
      <div className="home-text">
        <h1>Discover your</h1>
        <h1> next favorite artist </h1>
        <br/>
        <p>Dive into a world of fresh sounds and undiscovered talent! Take our quick music quiz to identify your preferred genres, or start exploring!</p>
        <p>By supporting these talented individuals, you'll not only expand your musical horizons but also help the artists grow and thrive. Discover, enjoy, and support the future of music today!</p>
      </div>
    </div>
    </div>
  );
}

export default Home;
