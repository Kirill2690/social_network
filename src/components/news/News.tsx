import React from 'react';
import styles from './News.module.css'

const News = () => {
    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                <a href="https://www.championat.com/news/football/1.html" target="_blank">Latest football news</a>
            </span>

        </div>
    );
};

export default News;