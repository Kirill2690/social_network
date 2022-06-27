import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Navbar/Music";
import Settings from "./Components/Navbar/Settings";

type MessageType = {
    id: number,
    message: string
};

type DialogType = {
    id: number,
    name: string
};

type PostType = {
    id: number,
    message: string,
    likeCount: number,
    img: string
};


type AppStateType = {
    dialogs: Array<DialogType>,
    message: Array<MessageType>,
    posts: Array<PostType>

};


const App = (props: AppStateType) => {
    let dialogs = props.dialogs
    let message = props.message
    let profile = props.posts
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
