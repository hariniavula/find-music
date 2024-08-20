import React from 'react';
import './Country.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube, faApple } from '@fortawesome/free-brands-svg-icons';
import lonelyRoad from "./assets/lonely.jpeg"
import maxed from "./assets/maxed.jpeg"
import damaged from "./assets/damaged.png"
import pack from "./assets/pack.jpg"
import cozy from "./assets/cozy.jpg"
import make from "./assets/make.jpeg"
import lies from "./assets/lies.jpg"
import lovin from "./assets/lovin.jpeg"






const Country = () => {
    return (
        <div className="outer">
            <div className="title">
                <h3>Country Music</h3>
                <br />
                <p>
                Country music captures the heart of rural life with soulful storytelling. It features instruments like the guitar and banjo, with lyrics about love, hardship, and resilience.</p>
                <br />
            </div>
            <div className="boxes">
                <div className="song">
                    <h1>Lonely Road</h1>
                    <img src={lonelyRoad} alt="lonely-img" className="about-image" />
                    <br/>
                    <h4>Timmy McKeever</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/6HwbIAd0HrVfSEUcz2D4pI" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/za/song/lonely-road/1708130543" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=sq5buvqBVAg" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Maxed Out</h1>
                    <img src={maxed} alt="maxed-img" className="about-image" />
                    <br/>
                    <h4>Bayker Blankenship</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/3DnsQ5O4uJw3MlYgvBJSCq" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/br/song/maxed-out/1740435869?l=en-GB" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=Bs8iPgFddFQ" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Damaged Goods</h1>
                    <img src={damaged} alt="damaged-img" className="about-image" />
                    <br/>
                    <h4>Shantaia</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/3YoTyle23wyRZMLoIJGyHv" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/damaged-goods/1660885154" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=FYnx5IU7ro4" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Pack My Hometown</h1>
                    <img src={pack} alt="pack-img" className="about-image" />
                    <br/>
                    <h4>Eli Winders</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/7IAmh4baSztXaPd0gncWwK" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/pack-my-hometown/1741522228" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=KdRao9JrKSQ" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Cozy</h1>
                    <img src={cozy} alt="cozy-img" className="about-image" />
                    <br/>
                    <h4>Braxton Keith</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/7vtdJnOxzDbRPtzge0KNqY" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/cozy/1734908402" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=6VPF1sEplpI" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Make You Mine</h1>
                    <img src={make} alt="make-img" className="about-image" />
                    <br/>
                    <h4>MaRynn Taylor</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/0CZwrYqSTnfzAjtynr6zBp" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/song/make-you-mine/1676480176" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=IQT7fG229fc&list=OLAK5uy_kMPmCzpld9CleKshariFFT6xPG3KSDQOM&index=1&pp=8AUB" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Lies I Tell Myself</h1>
                    <img src={lies} alt="lies-img" className="about-image" />
                    <br/>
                    <h4>CJ Solar</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/3L0lRhSvjpbhPK1UKrS3aQ" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/ca/song/lies-i-tell-myself/1728927749" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=7BSu0B9XxiA" className = "youtube" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>    
                </div>
                <div className="song">
                    <h1>Lovin' Was Easy</h1>
                    <img src={lovin} alt="lovin-img" className="about-image" />
                    <br/>
                    <h4>Hannah Adams</h4>
                    <div className="social-links">
                        <a href="https://open.spotify.com/track/0nB4fPKN6qpZDD4VseNxYi" className = "spotify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/album/lovin-was-easy-single/1748668242" className = "apple" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                       
                    </div>    
                </div>
                
                {/* Add more songs as needed */}
            </div>
        </div>
    );
}

export default Country;
