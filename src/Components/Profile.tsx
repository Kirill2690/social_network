import React from 'react';
import s from "./../Components/Profive.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://onlypult.com/blog_uploads/822fe1f0c39d2200251c7c18847e13cd.png'/>
            </div>
            <div className={s.item}>
                ava+discroption
            </div>
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

        </div>

    );
};

export default Profile;