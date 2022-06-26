import React from 'react';
import s from "./Post.module.css";


const Post = () => {
    return (
        <div className={s.item}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe93IYuGvcsd4AvsfiLpxCi86vrQpw6ntN1A&usqp=CAU'}/>
            Post1
            <div>
                <span>like</span>
            </div>

        </div>
    );
};

export default Post;