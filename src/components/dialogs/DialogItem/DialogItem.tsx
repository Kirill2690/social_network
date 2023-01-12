import React from 'react';
import styles from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialogsType = {
    id: number
    name: string
    avatar: string
}

const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img className={styles.avatar} src={props.avatar} alt={'avatar'}/>
            <NavLink to={path}><span className={styles.name}>{props.name}</span></NavLink>
        </div>
    )
}

export default DialogItem;