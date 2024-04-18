import React, { useState } from 'react';

function Task8() {
  const [text, setText] = useState('');
  const [length, setLength] = useState('');
  const [modifiedText, setModifiedText] = useState('');

  const handleRemoveWords = () => {
    const newText = text.split(' ')
                        .filter(word => !(word.length === parseInt(length, 10) && /^[bcdfghjklmnpqrstvwxyz]/i.test(word)))
                        .join(' ');
    setModifiedText(newText);
  };

  return (
    <div>
      <h2>Task 8: Remove Words of Specified Length Starting with a Consonant</h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <input
        type="number"
        value={length}
        onChange={e => setLength(e.target.value)}
        placeholder="Enter word length"
      />
      <button onClick={handleRemoveWords}>Remove Words</button>
      <p>Modified Text: {modifiedText}</p>
    </div>
  );
}

export default Task8;
