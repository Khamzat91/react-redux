import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {
const posts = useSelector(state => state.posts.posts)

    if(!posts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return posts.map((post) => <Post post={post} key={post.id}/>)
}



export default Posts;