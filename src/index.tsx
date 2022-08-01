import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, AppStateType, callBackNewPostText, subscribe} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App dialogs={state.dialogsPage.dialogsData} message={state.dialogsPage.messagesData}
                 posts={state.profilePage.posts} addPost={addPost} newPostText={state.profilePage.newPostText}
            callBackNewPostText={callBackNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

subscribe(renderTree)