import React, { useState } from 'react';

function Task5() {
  const [text, setText] = useState('');
  const [substring, setSubstring] = useState('');
  const [symbol, setSymbol] = useState('');
  const [modifiedText, setModifiedText] = useState('');

  const handleModification = () => {
    const regex = new RegExp(`(${substring})(\\b)`, 'gi');
    const newText = text.replace(regex, `$1${symbol}$2`);
    setModifiedText(newText);
  };

  return (
    <div>
      <h2>Task 5: Insert Symbol After Words Ending with Substring</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <input
        type="text"
        value={substring}
        onChange={e => setSubstring(e.target.value)}
        placeholder="Enter substring"
      />
      <input
        type="text"
        value={symbol}
        onChange={e => setSymbol(e.target.value)}
        placeholder="Enter symbol"
      />
      <button onClick={handleModification}>Modify Text</button>
      <p>Modified Text: {modifiedText}</p>
    </div>
  );
}

export default Task5;
