import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    callBackNewPostText:(newPostText:string)=>void

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

        props.addPost(props.newPostText)
       
    }
    const newPostTextOnChangeHandler = ((e:ChangeEvent<HTMLTextAreaElement>) => {
        props.callBackNewPostText(e.currentTarget.value)})
    return (
        <div className={s.posts_block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={newPostTextOnChangeHandler}/>
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