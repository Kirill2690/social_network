import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Message/Message";
import Message from "./Message/Message";

type DialogsType = {
    dialogs: Array<DialogType>
    message:Array<MessageType>
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number,
    message: string
};


const Dialogs = (props: DialogsType) => {


    let dialogsElements = props.dialogs.map(d => (<Dialog name={d.name} id={d.id} key={d.id}/>))

    let messagesElements = props.message.map(m => (<Messages message={m.message} key={m.id}/>))

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
