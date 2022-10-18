import React from 'react';
import s from "./Navbar.module.css";

const News = () => {
    return (
        <div className={s.item}>
            <a href={'/news'}>News</a>
        </div>
    );
};

export default News;