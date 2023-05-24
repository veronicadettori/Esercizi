import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <div>
      <h3>{comment.author}</h3>
      <p>{comment.text}</p>
      <p>Rating: {comment.rating}</p>
    </div>
  );
};

export default SingleComment;
