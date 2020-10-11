import React from 'react';
import logo from "../pictures/logoProPets.png";
import style from '../css_modules/StartPageHeader.module.css'

const StartPageHeader = () => {
    function handleClick(e) {
        e.preventDefault();

    }
    return (
            <div className={`${style.header}`}>
                <div className="container h-100  ">
                    <div className='row h-100 d-flex justify-content-between align-items-center'>
                        <div className="col-lg-2">
                            <img src={logo}/>
                        </div>
                        <div className="col-lg-2 ">
                            <button className={`${style.myBtn}`} onClick={handleClick}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default StartPageHeader;