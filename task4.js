import React, { useState } from 'react';

function Task4() {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [weekDay, setWeekDay] = useState('');

  const findDayOfWeek = () => {
    const date = new Date(2015, month - 1, day);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    setWeekDay(`January 1st, 2015 was a Thursday. The day you selected is a ${daysOfWeek[date.getDay()]}.`);
  };

  return (
    <div>
      <h2>Task 4: Find Day of Week from January 1, 2015</h2>
      <input
        type="number"
        value={month}
        onChange={e => setMonth(e.target.value)}
        placeholder="Enter month (1-12)"
      />
      <input
        type="number"
        value={day}
        onChange={e => setDay(e.target.value)}
        placeholder="Enter day (1-31)"
      />
      <button onClick={findDayOfWeek}>Find Day</button>
      <p>{weekDay}</p>
    </div>
  );
}

export default Task4;
