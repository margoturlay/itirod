import React, { useState } from 'react';
import styled from 'styled-components';
import { Vector, Task, ActiveTask, StudentRecord } from './classes';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Button = styled.button`
  background-color: #3498db;
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
    background-color: #2980b9;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Th = styled.th`
  background-color: #3498db;
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
  background: #6A6A6A;
  }
`;

const JsonTable = ({ data }) => {
  const renderRow = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return value.map((item, index) => renderRow(`${key}[${index}]`, item));
      }
      return (
        <>
          <Tr key={key}>
            <Td colSpan="2">
              <strong>{key}</strong>
            </Td>
          </Tr>
          {Object.entries(value).map(([subKey, subValue]) => renderRow(subKey, subValue))}
        </>
      );
    }
    return (
      <Tr key={key}>
        <Td>{key}</Td>
        <Td>{value.toString()}</Td>
      </Tr>
    );
  };

  return (
    <Table>
      <tbody>{Object.entries(data).map(([key, value]) => renderRow(key, value))}</tbody>
    </Table>
  );
};

const VectorResultContainer = styled.div`
  border-radius: 4px;
  background: #6A6A6A;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const VectorResultTitle = styled.h2`
  color: #3498db;
  margin-bottom: 10px;
`;

const VectorResultList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const VectorResultItem = styled.li`
  margin-bottom: 5px;
`;

const VectorResult = ({ result }) => (
  <VectorResultContainer>
    <VectorResultTitle>Vector Operations:</VectorResultTitle>
    <VectorResultList>
      <VectorResultItem>{result.v1}</VectorResultItem>
      <VectorResultItem>{result.v2}</VectorResultItem>
      <VectorResultItem>Sum: {result.plus}</VectorResultItem>
      <VectorResultItem>Scalar Product: {result.scalar}</VectorResultItem>
      <VectorResultItem>Length of Vector 1: {result.length}</VectorResultItem>
    </VectorResultList>
  </VectorResultContainer>
);

function testVectors() {
  const v1 = new Vector(1, 2, 3);
  const v2 = new Vector(4, 5, 6);
  return {
    v1: `Vector v1: ${v1.toString()}`,
    v2: `Vector v2: ${v2.toString()}`,
    plus: v1.plus(v2).toString(),
    scalar: v1.scalar(v2),
    length: v1.length,
  };
}

function testTasks() {
  const mainTask = new Task('Project', 'Complete the project', '2023-01-01', '2023-01-31');
  const subTask = new Task('Sub Project', 'Complete the sub-project', '2023-01-05', '2023-01-15');
  mainTask.addSubtask(subTask);
  return mainTask; // Return the whole task object
}

function testStudentRecords() {
  const students = [
    new StudentRecord('Computer Science', 'CS101', 'Alice Johnson', [4, 4, 5, 3]),
    new StudentRecord('Biology', 'BIO111', 'Bob Smith', [2, 3, 3, 4]),
    new StudentRecord('Computer Science', 'CS101', 'Charlie Brown', [5, 5, 5, 5]),
  ];

  return {
    allStudents: StudentRecord.sortStudents(students),
    studentsInCS101: StudentRecord.sortStudentsWithinGroup(students, 'CS101'),
    successfulStudents: StudentRecord.listSuccessfulStudents(students),
    aliceJohnson: StudentRecord.findStudentByFullName(students, 'Alice Johnson'),
  };
}

function App() {
  const [vectorResult, setVectorResult] = useState(null);
  const [taskResult, setTaskResult] = useState(null);
  const [studentResult, setStudentResult] = useState(null);

  const handleTestVectors = () => {
    const result = testVectors();
    setVectorResult(result);
  };

  const handleTestTasks = () => {
    const result = testTasks();
    setTaskResult(result);
  };

  const handleTestStudentRecords = () => {
    const result = testStudentRecords();
    setStudentResult(result);
  };

  return (
    <Container>
      <Header>
        <Button onClick={handleTestVectors}>Test Vectors</Button>
        {vectorResult && <VectorResult result={vectorResult} />}
        <Button onClick={handleTestTasks}>Test Tasks</Button>
        {taskResult && <JsonTable data={taskResult} />}
        <Button onClick={handleTestStudentRecords}>Test Student Records</Button>
        {studentResult && <JsonTable data={studentResult} />}
      </Header>
    </Container>
  );
}

export default App;
