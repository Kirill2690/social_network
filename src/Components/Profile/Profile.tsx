import React from 'react';
import s from "./Profive.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://habrastorage.org/r/w1560/getpro/habr/upload_files/454/473/cda/454473cdac3565410367172c7824f19a.jpg'/>
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