import React from 'react';
import s from "./Navbar.module.css";

const Messages = () => {
    return (
        <div className={s.item}>
            <a href={'/dialogs'}>Message</a>
        </div>
    );
};

export default Messages;