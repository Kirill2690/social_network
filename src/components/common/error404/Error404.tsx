import React from 'react';
import error404 from '../../../assets/images/error404.png'
import s from './Error404.module.css'

export const Error404 = () => {
    return (
        <div className={s.error404}>
            <img src={error404} alt={'Page not found'}/>
        </div>
    );
};