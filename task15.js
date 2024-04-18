import React, { useState } from 'react';

function Task15() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const findWords = () => {
    const words = new Set(text.match(/\b\w+\b/g) || []);
    const filteredWords = [...words].filter(word => word[0] === word[word.length - 1]);
    setResult(`Words where first and last letters are the same: ${filteredWords.join(', ')}`);
  };

  return (
    <div>
      <h2>Task 15: Words with Same Start and End Letter</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={findWords}>Find Words</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Task15;
