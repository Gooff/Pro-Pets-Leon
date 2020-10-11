import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import AddLostPageForm from "./AddLostPageForm";
import RightSide from "./RightSide";
import ConfirmationPost from "./ConfirmationPost";

const ConfirmationPostPage = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid  main">
                <div className=" row ">
                    <SideBar/>
                    <ConfirmationPost />
                    <RightSide/>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPostPage;