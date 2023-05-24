import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async (comment) => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([...comments, newComment]);
      } else {
        console.log('Error adding comment');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CommentList comments={comments} />
      <AddComment addComment={addComment} />
    </div>
  );
};

export default CommentArea;
