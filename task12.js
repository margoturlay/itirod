import React, { useState } from 'react';

function Task12() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const findMostFrequentChars = () => {
    const charCount = text.split('').reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
    const maxCount = Math.max(...Object.values(charCount));
    const mostFrequentChars = Object.keys(charCount).filter(char => charCount[char] === maxCount);
    setResult(`Most frequent characters: ${mostFrequentChars.join(', ')}`);
  };

  return (
    <div>
      <h2>Task 12: Find Most Frequently Occurring Characters</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={findMostFrequentChars}>Find Characters</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Task12;
