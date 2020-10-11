import React from 'react';
import style from "../css_modules/ConfirmationPost.module.css";
import avatar from "../pictures/avatar.png";
import Dog from '../pictures/Dog.png'

const ConfirmationPost = () => {
    return (
        <div className={`${style.form} col-lg-6`}>
            <h2><strong>Preview and Publish.</strong> Please share the post to your FB to be more effective.</h2>
            <div className={`${style.infoForm} d-flex`}>
                <img src={Dog} className={`${style.pic}`}/>
                <div>
                    <h3 className='mt-2'>Dog, Golden Retriever</h3>
                    <div className='container'>
                        <div className="row">
                            <div className='col-lg-6'><span style={{color: '#84B6A3'}}>Color:</span> golden<br/>
                                <span style={{color: '#84B6A3'}}> Sex:</span> male <br/>
                                <span style={{color: '#84B6A3'}}> Height:</span> 45 cm <br/>
                            </div>
                            <div className='col-lg-6'>
                                <span style={{color: '#84B6A3'}}>Distinctive features: </span>blue collar with stars,
                                no
                                left ear, damaged tail.
                            </div>
                            <div className='col-lg-12 mt-2'>
                                <span style={{color: '#84B6A3'}}> Description: </span>brown fox jumps over a lazy dog.
                                DJs flock by when MTV ax quiz prog. Junk MTV
                                quiz
                                graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            </div>
                            <div className={`${style.line} col-lg-11`}></div>
                            <i className=" fas fa-map-marker col-lg-1"/>
                            <div className='col-lg-11'>Florentin, 27, Tel Aviv</div>
                            <div className={`${style.avatar} col-lg-1 mt-2 mr-1`}>
                                <img src={avatar}/>
                            </div>
                            <div className={`${style.name} h-100 col-lg-7`}>
                                <div>John Goodboi</div>
                                <div className={`${style.data}`}>
                                    Dec 12, 2019 {/*-----TO DO  data func-----*/}
                                </div>
                            </div>
                            <i className="fas fa-phone-square-alt mt-5 mr-2"></i>
                            <i className="fab fa-facebook-square mt-5 mr-2"></i>
                            <i className=" fas fa-envelope-square  mt-5"/>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two
                weeks. To make it active again follow the instructions you’ll get in email.</h2>
            <div className='d-flex justify-content-between mt-5'>
                <div className='d-flex mt-3 align-items-center ml-5'>
                    <input type='checkbox'/>
                    <label className={'ml-2'}> Share to Facebook</label>
                </div>
                <div className='d-flex'>
                    <button className={`${style.myBtn} ${style.btnEdit} mt-4 mr-1 `}>
                        <i className=" fas fa-edit col-lg-2 "/>
                        <div className='offset-1 col-lg-3'>Edit</div>
                    </button>
                    <button className={`${style.myBtn} ${style.btnSubmit} mt-4 mr-1`}>
                        <i className=" fas fa-paw col-lg-2"/>
                        <div className='offset-1 col-lg-3'>Publish</div>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ConfirmationPost;