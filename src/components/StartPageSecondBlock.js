import React from 'react';
import style from '../css_modules/StartPageSecondBlock.module.css'

const StartPageSecondBlock = () => {
    return (
        <div>
            <div className={`${style.secondBlock} container`}>
                <div className="row d-flex">
                    <div className={`${style.picture2 } col-lg-5`}/>
                    <div className='col-lg-7'>
                        <div className={`${style.textTop } ${style.myli}`}>Here is collected everything that your pet needs:</div>
                        <li className={` ${style.myli}`}> professional veterinarian tips;</li>
                        <li className={` ${style.myli}`}> useful information about education and care;</li>
                        <li className={` ${style.myli}`}> fostering home search;</li>
                        <li className={` ${style.myli}`}> information about pet-sitting and walking service;</li>
                        <li className={` ${style.myli}`}> and of course, great communication with new </li>
                        <li className={`${style.styleOne} `}>friends in your social network!</li>
                    </div>
                </div>
            </div>
            <section className={`${style.redFooter }`}>
                <div className="container h-100">
                    <div className="row d-flex h-100 align-items-center">
                        <div className={`${style.comingSoon } col-lg-5`}>Coming Soon</div>
                        <div className={`${style.textInRed } col-lg-4`}> We are planing to open a new service, where your cats and
                            dogs can find their love!
                        </div>
                        <div className={`${style.heart} col-lg-2 offset-1`}><p>LOVE</p></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartPageSecondBlock;