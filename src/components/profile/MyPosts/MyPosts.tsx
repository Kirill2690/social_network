import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostsType} from './Post/Post';
import {AddNewPostFormRedux} from './AddNewPostForm/AddNewPostForm';

type PropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    addPost: (postMessage: string) => void
}

const MyPosts = React.memo((props: PropsType) => {

    const postsElements = [...props.posts]
        .reverse()
        .map(p => <Post key={p.id} id={p.id} message={p.message}
                        likesCount={p.likesCount}/>)

    const onAddPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.title_post}>My posts</h3>
            <div className={s.post_box}>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>

    );
})

export default MyPosts;