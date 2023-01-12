import React, {useRef, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader';
import {ContactsType, ProfileType} from '../ProfileContainer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/profile.png';
import ProfileDataForm from './ProfileDataForm';
import {Button} from 'antd';
import {CameraOutlined} from '@ant-design/icons';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileType | null) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         profile,
                                                         status,
                                                         updateStatus,
                                                         isOwner,
                                                         savePhoto,
                                                         saveProfile
                                                     }) => {
    const ref = useRef<HTMLInputElement>(null);

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: { target: any }) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType | null) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <img src={profile.photos?.large || userPhoto} className={s.mainPhoto} alt={'large avatar'}/>
                    <div className={s.camera_button}>
                        <Button
                            type="default"
                            shape="circle"
                            icon={<CameraOutlined/>}
                            onClick={() => ref.current?.click()}
                        />
                    </div>
                </div>
                {isOwner &&
                    <input
                        type={'file'}
                        onChange={onMainPhotoSelected}
                        ref={ref}
                        style={{display: 'none'}}
                    />
                }
                {editMode
                    ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    );
};

type ContactType = {
    contactTitle: string
    contactValue: string
}

export type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.contact}>

        <div>
            <span className={s.title}>Full name: </span> {profile.fullName}
        </div>
        <div>
            <span className={s.title}>Looking For A Job: </span>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <span className={s.title}>My professional skills: </span> {profile.lookingForAJobDescription}
            </div>}
        <div>
            <span className={s.title}>About Me: </span> {profile.aboutMe}
        </div>
        <div>
            <span className={s.title}>Contacts: </span> {profile.contacts && Object.keys(profile.contacts).map(key => {

            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
        {isOwner && <div className={s.button_edit}>
            <button  onClick={goToEditMode}>Edit</button>
        </div>}
    </div>
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><span className={s.title}>{contactTitle}: </span> {contactValue}</div>
}

export default ProfileInfo;