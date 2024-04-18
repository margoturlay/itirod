import React, { useState } from 'react';

function Task2() {
  const [floors, setFloors] = useState('');
  const [entrances, setEntrances] = useState('');
  const [apartmentsPerFloor, setApartmentsPerFloor] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [result, setResult] = useState('');

  const calculateEntrance = () => {
    const numFloors = parseInt(floors, 10);
    const numEntrances = parseInt(entrances, 10);
    const numApartmentsPerFloor = parseInt(apartmentsPerFloor, 10);
    const numApartmentNumber = parseInt(apartmentNumber, 10);

    if (isNaN(numFloors) || isNaN(numEntrances) || isNaN(numApartmentsPerFloor) || isNaN(numApartmentNumber)) {
      setResult("Invalid input, please enter numeric values only.");
      return;
    }

    const apartmentsPerEntrance = numFloors * numApartmentsPerFloor;
    const entranceNumber = Math.ceil(numApartmentNumber / apartmentsPerEntrance);

    if (entranceNumber > numEntrances || entranceNumber < 1) {
      setResult("No such apartment in the building.");
    } else {
      setResult(`Apartment is in entrance ${entranceNumber}.`);
    }
  };

  return (
    <div>
      <h2>Task 2: Find the Entrance of an Apartment</h2>
      <input
        type="number"
        value={floors}
        onChange={e => setFloors(e.target.value)}
        placeholder="Enter number of floors"
      />
      <input
        type="number"
        value={entrances}
        onChange={e => setEntrances(e.target.value)}
        placeholder="Enter number of entrances"
      />
      <input
        type="number"
        value={apartmentsPerFloor}
        onChange={e => setApartmentsPerFloor(e.target.value)}
        placeholder="Enter apartments per floor"
      />
      <input
        type="number"
        value={apartmentNumber}
        onChange={e => setApartmentNumber(e.target.value)}
        placeholder="Enter apartment number"
      />
      <button onClick={calculateEntrance}>Find Entrance</button>
      <p>{result}</p>
    </div>
  );
}

export default Task2;
