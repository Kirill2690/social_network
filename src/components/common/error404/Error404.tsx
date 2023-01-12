import React from 'react';
import styles from './Error404.module.css'
import error_img from '../../../assets/images/error_404.png'

export const Error404 = () => {
    return (
        <div className={styles.error404}>
            <img className={styles.img_error} src={error_img} alt={'Page not found'}/>
        </div>
    );
};