import React, { useState } from 'react';

function Task7() {
  const [text, setText] = useState('');
  const [modifiedText, setModifiedText] = useState('');

  const handleCleanText = () => {
    const newText = text.replace(/[^a-zA-Z\s]/g, '');
    setModifiedText(newText);
  };

  return (
    <div>
      <h2>Task 7: Remove Non-letter Characters Except Spaces</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleCleanText}>Clean Text</button>
      <p>Modified Text: {modifiedText}</p>
    </div>
  );
}

export default Task7;
