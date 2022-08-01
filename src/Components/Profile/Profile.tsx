import React from 'react';
import s from "./Profive.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";
type ProfileType={
    profile:PostType[],
    addPost:(postMessage:string)=>void,
    newPostText:string
    callBackNewPostText:(newPostText:string)=>void
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
            <MyPosts posts={props.profile} addPost={props.addPost} newPostText={props.newPostText}
                     callBackNewPostText={props.callBackNewPostText} />
     </div>

    );
};
//// mo kmokmf
export default Profile;