import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {
            id: 1,
            message: 'Hi,how are you?',
            likeCount: 10,
            img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg'
        },
        {
            id: 2,
            message: 'Hello',
            likeCount: 15,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_d4t6iILWhDGYDrjudm76-kC7P77d3zZqQ&usqp=CAU'
        }

    ];
    let postsElement = posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}
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