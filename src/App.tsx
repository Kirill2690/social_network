import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Navbar/Music";
import Settings from "./Components/Navbar/Settings";
import state from "./Redux/State";

//
const App = () => {
    let dialogs = state.dialogsPage.dialogsData
    let message = state.dialogsPage.messagesData
    let profile = state.profilePage.posts;
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Navbar/>
                <div className='wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} message={message}/>}/>
                    <Route path={'/profile'} render={() => <Profile profile={profile}/>}/>
                    <Route path={'/music'} render={Music}/>
                    <Route path={'/settings'} render={Settings}/>

                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
