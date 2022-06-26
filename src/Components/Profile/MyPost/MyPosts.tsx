import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;