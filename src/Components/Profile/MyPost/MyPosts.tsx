import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <Post message={'Hi,how are you?'} likeCount={'likes 10'} img={'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg'}/>
                <Post message={'Hello!'} likeCount={'likes 15'} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_d4t6iILWhDGYDrjudm76-kC7P77d3zZqQ&usqp=CAU'}/>
            </div>
        </div>
    );
};

export default MyPosts;