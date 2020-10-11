import React from 'react';
import logoProPetsX2 from "../pictures/Group 87@2x.png";
import StartPageFooterNav from "./StartPageFooterNav";
import StartPageFooterInfo from "./StartPageFooterInfo";
import style from '../css_modules/StartPageFooter.module.css'

const StartPageFooter = () => {
    return (
            <footer>
                <div className="container h-100">{/*container for footer*/}
                    <div className="row h-100 d-flex align-items-center">
                       <StartPageFooterInfo/>
                       <StartPageFooterNav/>
                    </div>
                </div>
            </footer>
    );
};

export default StartPageFooter;