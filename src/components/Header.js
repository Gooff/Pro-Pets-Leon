import React from 'react';
import logo from "../pictures/RegLogo.png";
import style from '../css_modules/Header.module.css'

const Header = () => {

    return (
        <div className={`${style.header}`}>
            <div className="container h-100  ">
                <div className='row h-100 '>
                    <div className="col-lg-2  ">
                        <img src={logo} className='h-50 mt-3'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;