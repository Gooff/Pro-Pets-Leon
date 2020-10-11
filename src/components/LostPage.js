import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import AddLostPageForm from "./AddLostPageForm";
import RightSide from "./RightSide";
import LostPageInfo from "./LostPageInfo";

const LostPage = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid  main">
                <div className=" row ">
                    <SideBar/>
                    <LostPageInfo/>
                    <div>______MAP_________</div>
                </div>
            </div>
        </div>
    );
};

export default LostPage;