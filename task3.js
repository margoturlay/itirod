import React, { useState } from 'react';

function Task3() {
  const [index, setIndex] = useState('');
  const [fibNumber, setFibNumber] = useState('');

  const fibonacci = (num) => {
    if (num < 0) return "Invalid index";
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };

  const handleCalculate = () => {
    const idx = parseInt(index, 10);
    if (isNaN(idx) || idx < 0) {
      setFibNumber("Please enter a positive integer.");
      return;
    }
    setFibNumber(`The ${idx}th Fibonacci number is ${fibonacci(idx)}.`);
  };

  return (
    <div>
      <h2>Task 3: Calculate Fibonacci Number</h2>
      <input
        type="number"
        value={index}
        onChange={e => setIndex(e.target.value)}
        placeholder="Enter index of Fibonacci number"
      />
      <button onClick={handleCalculate}>Calculate Fibonacci</button>
      <p>{fibNumber}</p>
    </div>
  );
}

export default Task3;
