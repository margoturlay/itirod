import React, { useState } from 'react';

function Task13() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const findChain = () => {
    const words = text.match(/\b\w+\b/g) || [];
    let used = new Set();
    let chains = [];

    const formChain = (currentChain, unusedWords) => {
      let lastWord = currentChain[currentChain.length - 1];
      let lastChar = lastWord[lastWord.length - 1];
      let foundNext = false;

      unusedWords.forEach(word => {
        if (word[0] === lastChar && !used.has(word)) {
          used.add(word);
          formChain([...currentChain, word], unusedWords.filter(w => w !== word));
          used.delete(word);
          foundNext = true;
        }
      });

      if (!foundNext) chains.push(currentChain);
    };

    words.forEach(word => {
      used.add(word);
      formChain([word], words.filter(w => w !== word));
      used.delete(word);
    });

    chains.sort((a, b) => b.length - a.length); // Sort chains by length, longest first
    const longestChain = chains[0] || [];
    setResult(`Longest chain: ${longestChain.join(' -> ')}`);
  };

  return (
    <div>
      <h2>Task 13: Arrange Words in a Chain</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={findChain}>Arrange Words</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Task13;
