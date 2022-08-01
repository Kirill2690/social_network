import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Message/Message";
import Message from "./Message/Message";
import {ActionsType, sendMessageAC, updateMessageAC} from "../../Redux/State";

type DialogsType = {
    dialogs: Array<DialogType>
    message:Array<MessageType>
    newMessageText:string
    dispatch:(action:ActionsType)=>void
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
    let newMessageText=props.newMessageText
    const addMessage=()=>{
    props.dispatch(sendMessageAC())
    }
    const onNewMessageText=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newMessageText=e.target.value
        props.dispatch(updateMessageAC(newMessageText))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageText} onChange={onNewMessageText}  placeholder={'Enter you message'}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>SEND</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Dialogs;
