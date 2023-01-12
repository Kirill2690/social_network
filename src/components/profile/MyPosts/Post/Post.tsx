import React from 'react';
import styles from './Post.module.css';
import {useAppSelector} from "../../../../redux/redux-store";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostsType) => {

    const photo = useAppSelector(state => state.profilePage.profile.photos?.small)

    return (
        <div className={styles.item}>
            <img src={photo} alt={'ava'}/>
            { props.message }
            <div>
                <span>❤{props.likesCount}️</span>
            </div>
        </div>
    );
}

export default Post;