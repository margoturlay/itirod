import React, { useState } from 'react';
import styled from 'styled-components';
import Task1Button from "./classes";

const Container = styled.div`
  text-align: center;
  background-color: #8e44ad; /* Purple */
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #ffffff; /* White */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #e91e63; /* Pink */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b; /* Darker pink on hover */
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Th = styled.th`
  background-color: #e91e63; /* Pink */
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f8bbd0; /* Light pink */
  }
`;

const StudentReport = () => {
  const [students, setStudents] = useState([
    { id: 1, specialty: 'Computer Science', group: 'CS101', fullName: 'Alice Johnson', grades: [4, 4, 5, 3] },
    { id: 2, specialty: 'Biology', group: 'BIO111', fullName: 'Bob Smith', grades: [2, 3, 3, 4] },
    { id: 3, specialty: 'Computer Science', group: 'CS101', fullName: 'Charlie Brown', grades: [5, 5, 5, 5] },
  ]);

  // Function to sort students by average grade
  const sortStudentsByAverage = () => {
    const sortedStudents = [...students].sort((a, b) => {
      const avgA = calculateAverage(a.grades);
      const avgB = calculateAverage(b.grades);
      return avgB - avgA;
    });
    setStudents(sortedStudents);
  };

  // Function to calculate the average grade
  const calculateAverage = (grades) => {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
  };

  // Function to filter students who haven't received any failing grades
  const filterSuccessfulStudents = () => {
    const successfulStudents = students.filter(student => !student.grades.some(grade => grade < 3));
    setStudents(successfulStudents);
  };

  // Function to search for a student by name
  const searchStudentByName = (name) => {
    const foundStudent = students.find(student => student.fullName.toLowerCase() === name.toLowerCase());
    if (foundStudent) {
      setStudents([foundStudent]);
    } else {
      alert('Student not found!');
    }
  };

  return (
    <Container>
      <Header>
        <Button onClick={sortStudentsByAverage}>Sort Students by Average Grade</Button>
        <Button onClick={filterSuccessfulStudents}>Filter Successful Students</Button>
        <input type="text" placeholder="Search by name..." onChange={(e) => searchStudentByName(e.target.value)} />
        <Table>
          <thead>
            <Tr>
              <Th>Specialty</Th>
              <Th>Group</Th>
              <Th>Full Name</Th>
              <Th>Grades</Th>
              <Th>Average Grade</Th>
            </Tr>
          </thead>
          <tbody>
            {students.map(student => (
              <Tr key={student.id}>
                <Td>{student.specialty}</Td>
                <Td>{student.group}</Td>
                <Td>{student.fullName}</Td>
                <Td>{student.grades.join(', ')}</Td>
                <Td>{calculateAverage(student.grades).toFixed(2)}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Header>
    </Container>
  );
};

function App() {
  return (
    <div>
      <StudentReport />
      <Task1Button />
    </div>
  );
}

export default App;
