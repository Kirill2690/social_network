import React from 'react';
import s from "./Profive.module.css";
import {ProfileType} from "./ProfileContainer";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostContainer";
type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileType | null) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.container}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}