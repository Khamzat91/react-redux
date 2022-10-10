import React from "react";
import FetchedPosts from "./components/FetchedPosts";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Синхронные посты</h3>
          <Posts posts={[]}/>
        </div>
        <div className="col">
          <h3>Асинхронные посты</h3>
          <FetchedPosts posts={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
