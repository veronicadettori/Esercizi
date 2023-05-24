import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
