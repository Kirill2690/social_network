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



const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (

        <div className='wrapper'>
            <Header/>
            <Navbar/>
            <div className='wrapper-content'>
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={state.dialogsPage.dialogsData}
                                                               message={state.dialogsPage.messagesData}
                                                               newMessageText={state.dialogsPage.newMessageText}
                                                               dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path={'/profile'} element={<Profile profile={state.profilePage.posts}
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
