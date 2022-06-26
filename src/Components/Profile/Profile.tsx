import React from 'react';
import s from "./Profive.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
     </div>

    );
};

export default Profile;