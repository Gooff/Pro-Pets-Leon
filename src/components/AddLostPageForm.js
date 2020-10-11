import React from 'react';
import style from '../css_modules/AddLostPageForm.module.css'
import FormPic from '../pictures/FormPic.png'
import avatar from '../pictures/avatar.png'

const AddLostPageForm = () => {
    return (
        <div className={`${style.form} col-lg-6`} >
            <h2><strong>Lost your buddy? </strong> Keep calm and complete the form.</h2>
            <div className={`${style.infoForm} `}>
                <div className='row  d-flex '>
                    <form className='row  col-lg-6 mt-2 '>
                        <label className='col-lg-12'> Type:
                            <select>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            </select>
                        </label>
                        <label className='col-lg-12'> Sex:
                            <select>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </label>
                        <label className='col-lg-12'> Breed <input type="text" placeholder="Golden Retriever"/>
                        </label>
                        <label className='col-lg-12'> Color: <input type="text" placeholder="Beige"/>
                        </label>
                        <label className='col-lg-12'> Height:
                            <select>
                                <option value="Small">0-45 cm</option>
                                <option value="Medium">45-70 cm</option>
                                <option value="Big">>70cm</option>
                            </select>
                        </label>

                        <label className='col-lg-12 h-auto'> Distinktive features:
                            {/*<span style={{color: "#669885"}} >*/}
                            {/*    up to 60 char*/}
                            {/*</span>*/}
                            <textarea className='textInner1 align-text-top h-auto ' placeholder='blue collar with stars, no left ear, damaged tail.'></textarea>

                        </label>
                        <label className='col-lg-12 h-auto'> Description:
                            <textarea className= 'textInner2  align-text-top  ' placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk
                                jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'></textarea>
                        </label>
                        <label className='col-lg-12 h-auto'> Location:
                            <textarea className='textInner3  align-text-top h-auto' placeholder='Florentin Street, Tel Aviv'></textarea>
                        </label>
                    </form>
                    <div className=' col-lg-6'>
                        <img src={FormPic} className={`${style.picForm} mt-4`}/>
                        <div className={`${style.line}`}></div>
                        <div className=' d-flex'>
                            <div className={`${style.download} text-center`}>
                                <i className=" fas fa-sign-out-alt "></i>
                                <p>Drag and drop photos or</p>
                                <button className={`${style.myBtn} mt-3`}>Browse</button>
                            </div>
                            <div className={`${style.formForPic} ml-3`}/>
                        </div>
                    </div>
                </div>
                <div className={`${style.line}`}></div>
                <div className="ml-3">
                <label className='d-inline-flex'> Contacts:
                    <input type="text" placeholder="Phone*"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Facebook profile"/>
                </label>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex mt-3'>
                            <img src={avatar} className='mr-3'/>
                            <div className={`${style.name} h-100`}>John Goodboi</div>
                        </div>
                        <button className={`${style.myBtn} ${style.btnSubmit} mt-4 mr-5`}>
                            <i className=" fas fa-paw col-lg-2"/>
                            <div className='offset-1 col-lg-3'>Publish</div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddLostPageForm;