import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      <h2>Posts</h2>
      <Post />
    </div>
  );
};

export default Posts;
