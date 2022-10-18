import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogType = {
    name: string,
    id: number,
    avatar:string
}
const Dialog = (props: DialogType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default Dialog;
