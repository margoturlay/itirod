import React, { useState } from 'react';

function Task11() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const findVowelWords = () => {
    const words = text.match(/\b\w+\b/g) || [];
    const vowelWords = words.filter(word => /^[aeiou]/i.test(word) && /[aeiou]$/i.test(word));
    setResult(`Words starting and ending with a vowel: ${vowelWords.join(', ')}`);
  };

  return (
    <div>
      <h2>Task 11: Words Starting and Ending with a Vowel</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={findVowelWords}>Find Words</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Task11;
