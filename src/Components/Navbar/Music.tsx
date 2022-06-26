import React from 'react';
import s from "./Navbar.module.css";

const Music = () => {
    return (
        <div className={s.item}>
            <a href={'/music'}>Music</a>
        </div>
    );
};

export default Music;