import React, { useState } from 'react';

function Task1() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleCompare = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1)) {
      setMessage("Первый ввод – не число");
    } else if (isNaN(num2)) {
      setMessage("Второй ввод – не число");
    } else if (num1 === num2) {
      setMessage("Числа равны");
    } else if (num1 < num2) {
      setMessage("Первое число меньше");
    } else {
      setMessage("Второе число меньше");
    }
  };

  return (
    <div>
      <h2>Task 1: Compare Two Numbers</h2>
      <input
        type="text"
        value={firstNumber}
        onChange={e => setFirstNumber(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="text"
        value={secondNumber}
        onChange={e => setSecondNumber(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleCompare}>Compare Numbers</button>
      <p>{message}</p>
    </div>
  );
}

export default Task1;

