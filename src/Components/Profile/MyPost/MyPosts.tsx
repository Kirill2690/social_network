import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsType} from "../../../Redux/State";

type MyPostsType = {
    posts: Array<PostType>

    newPostText: string
    callBackNewPostText:(newPostText:string)=>void
    dispatch:(action:ActionsType)=>void,


}
type PostType = {
    id: number,
    message: string,
    likeCount: number,
    img: string
};

const MyPosts = (props: MyPostsType) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}
                                                  img={p.img} id={p.id}/>)

    const addPost = () => {
        props.dispatch({type:'ADD-POST'})

       
    }
    const newPostTextOnChangeHandler = ((e:ChangeEvent<HTMLTextAreaElement>) => {
        props.callBackNewPostText(e.currentTarget.value)})
    return (
        <div className={s.posts_block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} placeholder={'Enter you post'} onChange={newPostTextOnChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}

            </div>
        </div>
    );
};

export default MyPosts;