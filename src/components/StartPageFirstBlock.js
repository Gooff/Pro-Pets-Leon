import React from 'react';
import logoLost from "../pictures/searchAndPaw.png";
import styles from "../css_modules/StartPageFirstBlock.module.css";

const StartPageFirstBlock = () => {
    return (
        <div className={`${styles.firstBlock}`}>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-6">
                        <div className={`${styles.welcome}`}>Welcome to your <span
                            style={{color: "#669885"}}> pawfessional</span> community
                        </div>
                        <button className={`${styles.lost}`}><p>I lost my
                            pet!</p> <img src={logoLost} alt="" className='mt-3'/>
                        </button>
                        <button className={`${styles.found}`}><p>I found a
                            pet!</p>
                        </button>
                        <div className='joinText'>I’m okay, just want to <a href="">join</a> the pawsome community!
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${styles.picture}`}></div>
                    </div>
                </div>
            </div>
                <div className={`${styles.footerFirst}`}>
                    <div className={`${styles.textFooterFirst}`}>
                        Our fluffy space for lovers, admirers, dads and moms of our
                        four-legged, winged, tailed guys.
                    </div>
            </div>

        </div>
    );
};

export default StartPageFirstBlock;