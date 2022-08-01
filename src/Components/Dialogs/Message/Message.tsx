import React from 'react';
import s from './../Dialogs.module.css'


type MessagesType = {
    message: string
}
//

const Messages = (props: MessagesType) => {
    let newMessageElement=React.createRef<HTMLTextAreaElement>()


    return (
        <div className={s.message}>
            {props.message}
        </div>


    )

}


export default Messages;
