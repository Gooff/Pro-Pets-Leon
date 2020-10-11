import React from 'react';
import './App.css';
import regLogo from './pictures/RegLogo.png'
import WellcomePage from "./WellcomePage";
import StartPageHeader from "./components/StartPageHeader";
import StartPageFirstBlock from "./components/StartPageFirstBlock";
import StartPageSecondBlock from "./components/StartPageSecondBlock";
import StartPageFooter from "./components/StartPageFooter";
import StartPageRegForm from "./components/StartPageRegForm";
import AddLostPage from "./components/AddLostPage";
import ConfirmationPostPage from "./components/ConfirmationPostPage";
import ProfilePage from "./components/ProfilePage";
import LostPage from "./components/LostPage";



function App() {
    return (
        <div>
            {/*<StartPageHeader/>*/}
            {/*<StartPageFirstBlock/>*/}
            {/*<StartPageSecondBlock/>*/}
            {/*<StartPageFooter/>*/}
            <StartPageRegForm/>
            {/*<AddLostPage/>*/}
            {/*<ConfirmationPostPage/>*/}
            {/*<ProfilePage/>*/}
            {/*<LostPage/>*/}
        </div>

    );
}

export default App;
