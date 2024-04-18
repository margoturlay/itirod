import React, { useState } from 'react';

function Task10() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const findWords = () => {
    const words = text.match(/\b\w+\b/g) || [];
    const maxLength = Math.max(...words.map(word => word.length));
    const minLength = Math.min(...words.map(word => word.length));
    const maxWords = words.filter(word => word.length === maxLength);
    const minWords = words.filter(word => word.length === minLength);
    setResult(`Longest words: ${maxWords.join(', ')} | Shortest words: ${minWords.join(', ')}`);
  };

  return (
    <div>
      <h2>Task 10: Find Words of Max and Min Length</h2>
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

export default Task10;
