import React from 'react';
import regLogo from "../pictures/RegLogo.png";
import style from '../css_modules/StartPageRegForm.module.css'

const StartPageRegForm = () => {
    return (
        <div > {/* className='fixed-top' -----  TODO */}
            <div className={`${style.regForm} container-fluid `}>
                <div className={`${style.regHeader} row d-flex justify-content-between`}>
                    <img className={`${style.regLogo} `} src={regLogo}/>
                    <a href="">
                        <i className={`${style.regClose} fas fa-times  mt-1 mr-2 `}></i>
                    </a>
                    <div className='w-100'/>
                    <p><span className='font-weight-bold'>Welcome!</span> Please sign in / sign up to continue or</p>
                    <button className='myBtn d-flex h-100 justify-content-between align-items-center text-center'>
                        <i className={`${style.logo__item} fab fa-facebook logo__item `}></i>
                        <div>Enter with Facebook</div>
                    </button>
                </div>
                <div >
                    <div className={`${style.regButtons} row`}>
                        <button className={`${style.myBtn} col-lg-6 `} >Sing up</button>
                        <button className={`${style.myBtn} col-lg-6 `}>Sing in</button>
                    </div>
                    <div className='row d-flex'>
                        <div className='row col-lg-6 mt-2'>
                            <label className='col-lg-12'> Name: <input type="text" placeholder="Helen Johnson"/> </label>
                            <label className='col-lg-12'> Email: <input type="email "placeholder="helenjohnson@gmail.com"/> </label>
                            <label className='col-lg-12'> Password: <input type="password"placeholder="*****************"/> </label>
                            <label className='col-lg-12'> Password: <input type="password"placeholder="*****************"/> </label>
                        </div>
                        <div className={`${style.text} col-lg-6`}>Password must have at least 8 characters with at least one Capital letter,
                            at least one lower case letter and at least one number or special character.</div>
                    </div>
                </div>
                <div className={`${style.regFooter} row`}>
                    <p className='h-100 col-lg-6 '>By clicking “Submit”, you agree to us processing your information in
                        accordance
                        with <a href=''>these terms.</a></p>
                    <div className='col-lg-5 offset-1 d-flex'>
                        <button className={`${style.myBtn} ${style.btnCancel}`}>Cancel</button>
                        <button className={`${style.myBtn} ${style.btnSubmit} row ml-2`}>
                            <i className="fas fa-paw col-lg-2"/>
                            <div className='offset-1 col-lg-3'>Submit</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPageRegForm;