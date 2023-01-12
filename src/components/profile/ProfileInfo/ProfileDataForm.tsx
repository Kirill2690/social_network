import React from 'react';
import {createField, Input, Textarea} from '../../common/forms/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from './ProfileInfo.module.css'
import style from '../../common/forms/FormControls.module.css';
import {ProfileType} from '../ProfileContainer';
import {Button} from 'antd';

const ProfileDataForm = (props: InjectedFormProps<ProfileType>) => {
    const {handleSubmit, initialValues, error} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <Button type="default" shape="round" onClick={handleSubmit}>save</Button>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
        </div>
        <div>
            <span className={style.title}>Full name: </span> {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <div className={style.title}>Looking For A Job: </div> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <span className={style.title}>My professional
                skills: </span> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <span className={style.title}>About me: </span> {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <span className={style.title}>Contacts: </span> {Object.keys(initialValues.contacts ?? {}).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;