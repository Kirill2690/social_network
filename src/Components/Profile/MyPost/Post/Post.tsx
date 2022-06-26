import React from 'react';
import s from "./Post.module.css";
type PostType={
    message:string,
    likeCount:string,
    img:string

}

const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src={props.img}/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>

        </div>
    );
};

export default Post;