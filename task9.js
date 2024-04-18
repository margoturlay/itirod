import React, { useState } from 'react';

function Task9() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const countLetters = () => {
    const vowels = text.match(/[aeiou]/gi) || [];
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    const result = vowels.length > consonants.length ? "More vowels" : "More consonants";
    setResult(result);
  };

  return (
    <div>
      <h2>Task 9: Count Vowels vs Consonants</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={countLetters}>Count</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Task9;
