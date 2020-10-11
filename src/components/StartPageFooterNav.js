import React from 'react';
import style from '../css_modules/StartPageFooterNav.module.css'

const StartPageFooterNav = () => {
    return (
        <div className="container col-lg-4">{/*container for nav*/}
            <div className="row ">
                <li className={`${style.navIcon} col-lg-4 offset-2`}>
                    <a href="">
                        <i className="fas fa-search"> Lost</i>
                    </a>
                </li>
                <li className={`${style.navIcon} col-lg-6`}>
                    <a href="">
                        <i className="fas fa-hotel"> Hotels</i>
                    </a>
                </li>
                <li className={`${style.navIcon} col-lg-4 offset-2`}>
                    <a href="">
                        <i className="fas fa-paw"> Found</i>
                    </a>
                </li>
                <li className={`${style.navIcon} col-lg-6`}>
                    <a href="">
                        <i className="fas fa-walking"> Walking</i>
                    </a>
                </li>
                <li className={`${style.navIcon} col-lg-4 offset-2`}>
                    <a href=""> <i className="fas fa-stethoscope"> VetHelp</i>
                    </a>
                </li>
                <li className={`${style.navIcon} col-lg-6`}>
                    <a href="">
                        <i className="fas fa-dog"> Fostering</i>
                    </a>
                </li>
            </div>
        </div>
    );
};

export default StartPageFooterNav;