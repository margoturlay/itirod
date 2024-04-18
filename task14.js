import React, { useState } from 'react';

function Task14() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const findMaxIdenticalSentences = () => {
    const sentences = text.split(/[.?!]+/).map(s => s.trim()).filter(s => s.length);
    let maxCount = 0;

    sentences.forEach((sent, i) => {
      const words = new Set(sent.match(/\b\w+\b/g) || []);
      let count = 1;

      for (let j = i + 1; j < sentences.length; j++) {
        const otherWords = new Set(sentences[j].match(/\b\w+\b/g) || []);
        if ([...words].every(word => otherWords.has(word))) {
          count++;
        }
      }

      maxCount = Math.max(maxCount, count);
    });

    setResult(`Maximum number of identical sentences: ${maxCount}`);
  };

  return (
    <div>
      <h2>Task 14: Find Maximum Number of Sentences with Identical Words</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={findMaxIdenticalSentences}>Find Sentences</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Task14;
