import React from 'react';
import s from "../../MyPost/ProfileInfo/ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
            <img
                src='https://habrastorage.org/r/w1560/getpro/habr/upload_files/454/473/cda/454473cdac3565410367172c7824f19a.jpg'/>
            </div>
            <div className={s.description_block}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;