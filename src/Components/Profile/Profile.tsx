import React from 'react';
import s from "./Profive.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";
import {ActionsType} from "../../Redux/State";
type ProfileType={
    profile:PostType[],
    newPostText:string
    callBackNewPostText:(newPostText:string)=>void,
    dispatch:(action:ActionsType)=>void
}
type PostType = {
    id: number,
    message: string,
    likeCount: number,
    img: string,


};
const Profile = (props:ProfileType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profile}  newPostText={props.newPostText}
                     callBackNewPostText={props.callBackNewPostText} dispatch={props.dispatch} />
     </div>

    );
};

export default Profile;