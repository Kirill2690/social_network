import React from 'react';
import s from "./MyPosts.module.css";
import Post, {PostType} from "./Post/Post";



type MyPostsType = {
    posts: Array<PostType>
    messageForNewPost: string
    addPost:(postMessage: string)=>void
}


const MyPosts = (props: MyPostsType) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}
                                                  img={p.img} id={p.id}/>)



    return (
        <div className={s.posts_block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} placeholder={'Enter you post'}/>
                </div>
                <div>
                    <button onClick={()=>alert(props.messageForNewPost)}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;