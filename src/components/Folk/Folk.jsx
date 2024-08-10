import React from 'react';
import './Folk.css';

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
                    <p>Artist Name - Song Description</p>
                </div>
                <div className="song">
                    <h1>Song Name</h1>
                    <img src="/src/assets/another-image.jpeg" alt="another-img" className="about-image" />
                    <p>Artist Name - Song Description</p>
                </div>
                <div className="song">
                    <h1>Song Name</h1>
                    <img src="/src/assets/another-image.jpeg" alt="another-img" className="about-image" />
                    <p>Artist Name - Song Description</p>
                </div>
                <div className="song">
                    <h1>Song Name</h1>
                    <img src="/src/assets/another-image.jpeg" alt="another-img" className="about-image" />
                    <p>Artist Name - Song Description</p>
                </div>
                {/* Add more songs as needed */}
            </div>
        </div>
    );
}

export default Folk;
