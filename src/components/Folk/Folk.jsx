import React from 'react';
import './Folk.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube, faApple } from '@fortawesome/free-brands-svg-icons';

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

const Folk = () => {
    return (
        <div className="outer">
            <div className="title">
                <h3>Folk Music</h3>
                <br />
                <p>Folk music is all about storytelling and tradition. It features acoustic instruments like guitars and fiddles, with lyrics that reflect everyday life and emotions.</p>
                <br />
            </div>
            <div className="boxes">
                <div className="song">
                    <h1>Song Name</h1>
                    <img src="/src/assets/our-eyes.jpeg" alt="our-eyes-img" className="about-image" />
                    <br/>
                    <h4>Artist Name</h4>
                    <div className="social-links">
                        <a href="https://spotify.com" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://youtube.com" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Song Name</h1>
                    <img src="/src/assets/our-eyes.jpeg" alt="our-eyes-img" className="about-image" />
                    <br/>
                    <h4>Artist Name</h4>
                    <div className="social-links">
                        <a href="https://spotify.com" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://youtube.com" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Song Name</h1>
                    <img src="/src/assets/our-eyes.jpeg" alt="our-eyes-img" className="about-image" />
                    <br/>
                    <h4>Artist Name</h4>
                    <div className="social-links">
                        <a href="https://spotify.com" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://youtube.com" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                
                {/* Add more songs as needed */}
            </div>
        </div>
    );
}

export default Folk;
