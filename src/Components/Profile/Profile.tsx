import React from 'react';
import s from "./Profive.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";
type ProfileType={
    profile:PostType[]
}
type PostType = {
    id: number,
    message: string,
    likeCount: number,
    img: string
};
const Profile = (props:ProfileType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profile}/>
     </div>

    );
};

export default Profile;