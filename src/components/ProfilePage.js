import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import AddLostPageForm from "./AddLostPageForm";
import RightSide from "./RightSide";
import Profile from "./Profile";

const ProfilePage = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid  main">
                <div className=" row ">
                    <SideBar/>
                    <Profile/>
                    <RightSide/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;