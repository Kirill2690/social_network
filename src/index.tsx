import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/State";


ReactDOM.render(
    <App dialogs ={state.dialogsPage.dialogsData} message={state.dialogsPage.messagesData} posts={state.profilePage.posts}/>,
    document.getElementById('root')
);