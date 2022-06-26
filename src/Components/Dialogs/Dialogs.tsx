import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessagesType = {
    message: string
}


const Messages = (props: MessagesType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

}


type DialogType = {
    name: string,
    id: string
}
const Dialog = (props: DialogType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <Dialog name='Kirill' id='1'/>
                <Dialog name='Natalia' id='2'/>
                <Dialog name='Varvara' id='3'/>
                <Dialog name='Victor' id='4'/>
                <Dialog name='Bob' id='5'/>
                <Dialog name='Donald' id='6'/>
            </div>
            <div className={s.messages}>
                <Messages message='Hi)'/>
                <Messages message='Yo!'/>
                <Messages message='Goodbye!'/>
            </div>
        </div>

    );
};

export default Dialogs;
