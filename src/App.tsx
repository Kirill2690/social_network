import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./Components/Navbar/Music";
import Settings from "./Components/Navbar/Settings";
import {StoreType} from "./Redux/State";

type PropsType = {
    store: StoreType
}
/*
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
*/


/*
type AppStateType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    callBackNewPostText: (newPostText: string) => void

};
*/


const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (

        <div className='wrapper'>
            <Header/>
            <Navbar/>
            <div className='wrapper-content'>
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={state.dialogsPage.dialogsData}
                                                               message={state.dialogsPage.messagesData}/>}/>
                    <Route path={'/profile'} element={<Profile profile={state.profilePage.posts}
                                                               addPost={props.store.addPost.bind(props.store)}
                                                               dispatch={props.store.dispatch.bind(props.store)}
                                                               newPostText={state.profilePage.newPostText}
                                                               callBackNewPostText={props.store.callBackNewPostText.bind(props.store)}/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>

            </div>

        </div>


    );
}


export default App;
