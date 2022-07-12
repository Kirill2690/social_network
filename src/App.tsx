import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
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
    dialogs: Array<DialogType>
    message: Array<MessageType>
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    callBackNewPostText: (newPostText: string) => void

};


const App = (props: AppStateType) => {
    let dialogs = props.dialogs
    let message = props.message
    let profile = props.posts

    return (

        <div className='wrapper'>
            <Header/>
            <Navbar/>
            <div className='wrapper-content'>
<Routes>
                <Route path={'/dialogs'} element={<Dialogs dialogs={dialogs} message={message}/>}/>
                <Route path={'/profile'} element={<Profile profile={profile}
                                                                addPost={props.addPost}
                                                                newPostText={props.newPostText}
                                                                callBackNewPostText={props.callBackNewPostText}/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
</Routes>

            </div>

        </div>



    );
}


export default App;
