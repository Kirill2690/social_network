import React from 'react';
import s from './../Dialogs.module.css'


type MessagesType = {
    message: string
}
//

const Messages = (props: MessagesType) => {
    let newMessageElement=React.createRef<HTMLTextAreaElement>()
    const addMessage=()=>{
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.message}>
            {props.message}
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>

        </div>


    )

}


export default Messages;
