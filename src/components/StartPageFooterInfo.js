import React from 'react';
import logoProPetsX2 from "../pictures/Group 87@2x.png";
import style from '../css_modules/StartPageFooterInfo.module.css'

const StartPageFooterInfo = () => {
    return (
        <div className="container col-lg-7">{/*container for Logo and Text and FB/Inst*/}
            <div className="row">
                <div className={`${style.footer_logo} col-lg-6 `}>
                    <img src={logoProPetsX2} alt=""/>
                </div>
                <div
                    className={`${style.textLastFooter}  container col-lg-5 offset-1`}>{/*container for Text and FB/Inst*/}
                    <div className=" d-flex mb-3">
                        <div className={`${style.icons__items} mr-3`}>
                            <a href="">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                        <div className={`${style.icons__items}`}>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <p>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
                </div>
            </div>
        </div>
    );
};

export default StartPageFooterInfo;