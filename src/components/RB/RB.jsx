import React from 'react';
import './RB.css';
import unwind from "./assets/unwind.jpeg"
import different from "./assets/different.png"
import loseControl from "./assets/lose-control.jpg"
import tillEnd from "./assets/till.jpg"
import hen from "./assets/hen.jpeg"
import speakMorning from "./assets/speak.jpeg"
import remedy from "./assets/remedy.jpeg"
import neverKnew from "./assets/never-knew.jpg"





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube, faApple } from '@fortawesome/free-brands-svg-icons';


const RB = () => {
    return (
        <div className="outer">
            <div className="title">
                <h3> R&B Music</h3>
                <br />
                <p>
                R&B music blends soulful melodies with smooth rhythms, focusing on themes of love, relationships, and emotion. It often features rich vocals and rhythmic beats, creating a sound that's both heartfelt and groovy.</p>
                <br />
            </div>
            <div className="boxes">
               
                <div className="song">
                    <h1>Unwind</h1>
                    <img src={unwind} alt="unwind-img" className="about-image" />
                    <br/>
                    <h4>Lauryn Kovacs</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/3zilW1sbGgg4EcVbs6tt12?autoplay=true" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/unwind/1722797496?i=1722797497" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=Qvpj9dSz-Mw" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Lose Control</h1>
                    <img src={loseControl} alt="lose-control-img" className="about-image" />
                    <br/>
                    <h4>Amaria</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/4fVXcxsXPW5lhy5ut9biHB" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/jm/song/lose-control/1579255676" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=cxqIWCdBGMQ" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Different</h1>
                    <img src={different} alt="different-img" className="about-image" />
                    <br/>
                    <h4>The Black Diamond & Brekhail</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/7Aqt1Zijv0zQ0pWfAWpBjZ" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/different/1671429160" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.google.com/search?q=black+diamond+different+spotify&sca_esv=3a6b220f597eeedb&sca_upv=1&rlz=1C5CHFA_enUS940US940&biw=638&bih=729&tbm=vid&sxsrf=ADLYWIJRwr24j5ym9s6f1Tfa4WG_SKxJ1Q%3A1724091019549&ei=i4rDZp2ZIdfO0PEPs9aR8Qk&ved=0ahUKEwjdip_G04GIAxVXJzQIHTNrJJ4Q4dUDCA4&uact=5&oq=black+diamond+different+spotify&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIh9ibGFjayBkaWFtb25kIGRpZmZlcmVudCBzcG90aWZ5MgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYnwVIwUdQ-AdYjUVwAHgAkAEAmAHWAaABpBqqAQcyMC4xMy4xuAEDyAEA-AEBmAIioAL3GsICBBAjGCfCAggQABiABBiiBMICCxAAGIAEGJECGIoFwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIKEAAYgAQYQxiKBcICBRAAGIAEwgINEAAYgAQYsQMYFBiHAsICBhAAGBYYHsICCxAAGIAEGIYDGIoFwgIIEAAYFhgeGA_CAgUQIRirApgDAIgGAZIHBzE5LjE0LjGgB8PmAQ&sclient=gws-wiz-video#" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>till the end of time</h1>
                    <img src={tillEnd} alt="till-img" className="about-image" />
                    <br/>
                    <h4>Dani Enli</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/4Qbkdkx1TuMpjVJxjnrUyb?autoplay=true" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/till-the-end-of-time/1747259097?i=1747259101" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=k0ua3WFnhVU" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>HenDawg </h1>
                    <img src={hen} alt="hen-img" className="about-image" />
                    <br/>
                    <h4>ïnnü</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/5E3q0Npk7hzzfkIOxy7coE?autoplay=true" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/hendawg-but-if-youre-wrong-if-im-wrong-if-were-wrong/1723983945?i=1723983946" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=vu4Znz5fzSs" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1 style={{ fontSize: "16px" }} >can we speak in the morning?</h1>
                    <img src={speakMorning} alt="speak-img" className="about-image" />
                    <br/>
                    <h4>BLVCK VIØLET</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/7MkIOxjKzCQunEKebCIA2J" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/can-we-speak-in-the-morning/1663041081" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=UoT0MDmyWKY" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>I Found My Remedy.</h1>
                    <img src={remedy} alt="remedy-img" className="about-image" />
                    <br/>
                    <h4>Mamadou.</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/2Xh57yP0LRW6rRLtN7NNWi" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/i-found-my-remedy/1745234737?i=1745234740" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=bgAfSL3L66U" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Never Knew</h1>
                    <img src={neverKnew} alt="never-knew-img" className="about-image" />
                    <br/>
                    <h4>Rovaye</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/album/5mY2wTsveZtbbvjaeiGBhb" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/never-knew-single/1762336796" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=5AdvYgZPw5A" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                
                {/* Add more songs as needed */}
            </div>
        </div>
    );
}

export default RB;
