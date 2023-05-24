import React, { useState } from 'react';
import '../style/classForm.css'

const AddComment = ({ addComment }) => {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length < 3 || text.length > 150) {
      console.log('Comment must be between 3 and 150 characters');
      return;
    }

    addComment({ username, text });

    // Reset 
    setUsername('');
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input
        type='text'
          className='classform bottom'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username..."
        />
        <textarea
          value={text}
          className='classform'
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your comment (3-150 characters)"
        />
        <button className='button bottom' type="submit">Postalo!</button>
        
      </form>
    </div>
  );
};

export default AddComment;
