import React from 'react';
import s from "../Profive.module.css";

const MyPosts = () => {
    return (
        <div className={s.item}>
            My post
            <div className={s.item}>
                New posts
            </div>
            <div>
                <div className={s.item}>
                    Post1
                </div>
                <div className={s.item}>
                    Post2
                </div>

            </div>
        </div>
    );
};

export default MyPosts;