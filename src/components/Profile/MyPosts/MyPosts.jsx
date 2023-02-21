import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}></div>
      <Post message="Hi? how are yua?" likesCount="0" />
      <Post message="It s my first post" likesCount="23" />
    </div>
  );
};

export default MyPosts;
