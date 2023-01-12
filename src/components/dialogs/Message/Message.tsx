import React from 'react';
import styles from './../Dialogs.module.css'

export type MessageType = {
    id: string
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}

export default Message;