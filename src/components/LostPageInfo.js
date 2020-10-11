import React from 'react';
import style from "../css_modules/ConfirmationPost.module.css";
import Dog from "../pictures/Dog.png";
import avatar from "../pictures/avatar.png";

const LostPageInfo = () => {
    return (
        <div className={`${style.form} col-lg-6`}>
            <div className={`${style.search} row`}>

            </div>

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
        </div>
    );
};

export default LostPageInfo;