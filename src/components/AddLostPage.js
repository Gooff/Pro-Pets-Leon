import React from 'react';
import StartPageHeader from "./StartPageHeader";
import style from '../css_modules/AddLostPage.modul.css'
import Header from "./Header";
import SideBar from "./SideBar";
import AddLostPageForm from "./AddLostPageForm";
import RightSide from "./RightSide";

const AddLostPage = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid  main">
                <div className=" row ">
                    <SideBar/>
                    <AddLostPageForm/>
                    <RightSide/>
                </div>
            </div>
        </div>
            );
            };

            export default AddLostPage;