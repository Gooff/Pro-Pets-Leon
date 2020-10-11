import React from 'react';
import style from "../css_modules/SideBar.module.css";
import avatar from "../pictures/avatar.png";

const SideBar = () => {
    return (
        <div className={`${style.main} `}>
            <div className="menu ml-5">
                <ul>
                    <li className={`${style.navIcon} `}>
                        <a href="">
                            <i className="fas fa-home"> Home</i>
                        </a>
                    </li>

                    <li className={`${style.navIcon} `}>
                        <a href="">
                            <i className="fas fa-search"> Lost</i>
                        </a>
                    </li>
                    <li className={`${style.navIcon} `}>
                        <a href="">
                            <i className="fas fa-paw"> Found</i>
                        </a>
                    </li>
                    <li className={`${style.navIcon} `}>
                        <a href="">
                            <i className="fas fa-bullhorn"> Sevice</i>
                        </a>
                    </li>
                    <li className={`${style.navIcon} `}>
                        <a href="">
                            <i className="fas fa-star"> Favorites</i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={`${style.line} `}/>
            <div className='d-flex align-items-center mt-3'>
                <div className={`${style.avatar} `}>
                    <img src={avatar}/>
                </div>
                <div className={`${style.name} h-100  `}>
                    <div>Anna Smith</div>
                </div>
            </div>
            <div className={`${style.btnLogoutContainer}`}>
                <i className="fas fa-sign-out-alt"></i>
                <button className={`${style.btnLogout}`}>Logout</button>
            </div>
            <div className={`${style.lineBottom}  `}/>
        </div>
    );
};

export default SideBar;