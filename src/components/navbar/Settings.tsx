import React from 'react';
import s from "./Navbar.module.css";

const Settings = () => {
    return (
        <div className={s.item}>
            <a href={'/settings'}>Settings</a>
        </div>
    );
};

export default Settings;