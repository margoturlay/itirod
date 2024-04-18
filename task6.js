import React, { useState } from 'react';

function Task6() {
  const [text, setText] = useState('');
  const [symbol, setSymbol] = useState('');
  const [modifiedText, setModifiedText] = useState('');

  const handleRemoval = () => {
    const newText = text.split(symbol).join('');
    setModifiedText(newText);
  };

  return (
    <div>
      <h2>Task 6: Remove Specified Symbol from Text</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <input
        type="text"
        value={symbol}
        onChange={e => setSymbol(e.target.value)}
        placeholder="Enter symbol to remove"
      />
      <button onClick={handleRemoval}>Remove Symbol</button>
      <p>Modified Text: {modifiedText}</p>
    </div>
  );
}

export default Task6;
