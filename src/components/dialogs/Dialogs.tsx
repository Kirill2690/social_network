import React from 'react';
import s from './Dialogs.module.css'
import Dialog, {DialogType} from "./Dialog/Dialog";
import Message, {MessageType} from "./Message/Message";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./addMessageForm/AddMessageForm";

export type DialogsType = {
    dialogs: Array<DialogType>
    message:Array<MessageType>
    newMessageBody:string
    sendMessage: (values: string) => void
    isAuth: boolean

}



const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs.map(d => (<Dialog name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>))

    let messagesElements = props.message.map(m => (<Message message={m.message} key={m.id} id={m.id}/>))
    let addMessage = (values: { newMessageBody: string }) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
               <AddMessageFormRedux onSubmit={addMessage}/>

            </div>
        </div>

    );
};

export default Dialogs;
