import PropTypes from "prop-types";
import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KyTmrTPHz1dzy5U_WBl-lSGPLpdxyauzQw&usqp=CAU" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

Post.propTypes = {
  likesCount: PropTypes.number,
  message: PropTypes.string.isRequired
};

export default Post;
