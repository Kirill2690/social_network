import React from 'react';
import s from "./Post.module.css";

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    img: string
};

const Post = (props: PostType) => {
    return (
        <div className={s.item} >
            <img src={props.img} alt={'ava'}/>
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>

        </div>
    );
};

export default Post;