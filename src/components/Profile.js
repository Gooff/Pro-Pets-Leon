import React from 'react';
import style from "../css_modules/Profile.module.css";
import avatar from "../pictures/avatar.png";


const Profile = () => {
    return (
        <div className={`${style.form} col-lg-6 `}>
            <h2><strong>Preview and Publish.</strong> Please share the post to your FB to be more effective.</h2>
            <div className={`${style.infoForm} d-flex `}>
                <div className="container mb-4">
                    <div className={`${style.regButtons} row`}>
                        <button className={`${style.myBtn} col-lg-6 `}>My profile</button>
                        <button className={`${style.myBtn} col-lg-6 `}>Activities</button>
                    </div>
                    <div className='row d-flex align-items-center mt-3'>
                        <div className={`${style.avatar} col-lg-2 `}>
                            <img src={avatar}/>
                        </div>
                        <div className={`${style.name} h-100 `}>
                            <div>Anna Smith</div>
                        </div>
                        <i className="fas fa-pencil-alt "></i>
                    </div>
                    <div className='row d-flex mt-2'>
                        <div className='row col-lg-6 mt-2'>
                            <label className='col-lg-12'> Email: <input type="email "placeholder="helenjohnson@gmail.com"/> </label>
                            <label className='col-lg-12'> Phone: <input type="text"placeholder="000-000-00-00"/> </label>
                            <label className='col-lg-12'> FB link:: <input type="password"placeholder="https://www.facebook.com/anna.smith908430"/> </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-end mt-4 mr-3'>
                <button className={`${style.myBtn} ${style.btnCancel}  mr-2`}>
                    <div className='offset-1 col-lg-3'>Cancel</div>
                </button>
                <button className={`${style.myBtn} ${style.btnSave} justify-content-center `}>
                    <i className=" fas fa-save "/>
                    <div className='offset-1 '>Save changes</div>
                </button>
            </div>
        </div>
    );
};

export default Profile;