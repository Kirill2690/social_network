import React from 'react';
import styles from './News.module.css'
import news from '../../assets/images/news.png'

const News = () => {
    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                <img className={styles.news_img} src={news} alt={news}/>
                <div>
                    <a className={styles.news_link} href="https://www.championat.com/news/football/1.html">📰latest football news📰</a>
                </div>
            </span>

        </div>
    );
};

export default News;