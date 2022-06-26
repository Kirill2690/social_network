import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
type MyPostsType={
    posts:Array<PostType>
}
type PostType = {
    id: number,
    message: string,
    likeCount: number,
    img: string
};

const MyPosts = (props:MyPostsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}
                                            img={p.img}/>)
    return (
        <div className={s.posts_block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;