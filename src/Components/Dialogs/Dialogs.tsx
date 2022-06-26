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
    id: number
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
    let dialogsData = [
        {id: 1, name: 'Kirill'},
        {id: 2, name: 'Natalia'},
        {id: 3, name: 'Varvara'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Bob'},
        {id: 6, name: 'Donald'}

    ];
    let dialogsElements = dialogsData.map(d => (<Dialog name={d.name} id={d.id}/>))


    let messagesData = [
        {id: 1, message: 'Hi)'},
        {id: 2, message: 'Yo!'},
        {id: 3, message: 'Goodbye!'},
        {id: 4, message: 'Good!'},
        {id: 4, message: 'NO!'}

    ];
    let messagesElements = messagesData.map(m => (<Messages message={m.message}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
};

export default Dialogs;
