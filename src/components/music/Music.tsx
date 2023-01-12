import React from 'react';
import styles from './Music.module.css'


const Music = () => {
    return (
        <div className={styles.container}>
            <audio controls>
                <source src="audio/music.ogg" type="audio/ogg; codecs=vorbis"/>
                    <source src="./МакSим-Знаешь ли ты.mp3" type="audio/mpeg"/>
                        <a style={{color:"white"}} href="audio/music.mp3">Скачайте музыку</a>
            </audio>
        </div>
    );
};

export default Music;