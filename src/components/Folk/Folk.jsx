import React from 'react';
import './Folk.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube, faApple } from '@fortawesome/free-brands-svg-icons';


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
                    <h1>Our Eyes Met on Friday</h1>
                    <img src="/src/assets/our-eyes.jpeg" alt="our-eyes-img" className="about-image" />
                    <br/>
                    <h4>Kaleb Cohen</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/5vqJGeLU0IRu6K5Ia972aa?si=ew6H6sISQTmD4nQDslBSeQ" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/ca/album/our-eyes-met-on-friday-single/1756432386" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=iWSlGrbJl4k&list=OLAK5uy_ngNRS-NoyheuFc39CkjfSSCYoDHrG4dDs&index=1" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>I Love You</h1>
                    <img src="/src/assets/i-love-you.jpg" alt="i-love-you-img" className="about-image" />
                    <br/>
                    <h4>Spencer Brady</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/album/3s0AQb8hu3ZCQlX9nuF4EK" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/no/song/i-love-you/1745576685" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=F3xKVgKMJII" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Everything We Need</h1>
                    <img src="/src/assets/everything-we.jpg" alt="everything-we-img" className="about-image" />
                    <br/>
                    <h4>Wilfred</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/7nsje8483TNyP10db3Axmx" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/everything-we-need/1698528365" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=hSUshXD4Rr8" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>only light</h1>
                    <img src="/src/assets/only-light.jpeg" alt="only-light-img" className="about-image" />
                    <br/>
                    <h4>Liv Romano</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/79epNQ5pFV7ZEbRXyBZ7hT" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/only-light-single/1743388339" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=IFE6PU1Y5Vg" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>mi amor</h1>
                    <img src="/src/assets/mi-amor.jpg" alt="mi-amor-img" className="about-image" />
                    <br/>
                    <h4>asiris</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/0Zjl8fzhO9Mq0epYS0eNvY" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/what-love-feels-like-single/1668685318" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=FIp89kUo9Vk" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>what love feels like</h1>
                    <img src="/src/assets/what-love.jpg" alt="what-love-img" className="about-image" />
                    <br/>
                    <h4>Alan Fiore</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/5kzsg1IUEYweJ4Sj9aHghO" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/what-love-feels-like/1668685319" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=FIp89kUo9Vk" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>waiting</h1>
                    <img src="/src/assets/waiting.jpg" alt="waiting-img" className="about-image" />
                    <br/>
                    <h4>Cassidy Forras</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/5eTBmJLfyCmFNZc8q2bmwQ" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/ca/song/waiting/1727783831" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=aq0q15a0cHY" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Blame The Moon</h1>
                    <img src="/src/assets/blame-moon.png" alt="sidewalk-img" className="about-image" />
                    <br/>
                    <h4>Hazlett</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/album/372YURpTeI9L6fkMNH6Nx2" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/ph/song/blame-the-moon/1692436410" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=DBXRci4PcrY" target="_blank" rel="noopener noreferrer">
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
