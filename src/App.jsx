
import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import './App.css'



export default function App () {
  const [employees, setEmployees] = useState([]);
  

  function addEmployee(emp){
    setEmployees([...employees,emp])
  }

  useEffect(() => {
    async function fetchData () {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        setEmployees(data.data);
      
    };

    fetchData();
  }, []);

  return (
    <div className='homepage'>
      <HomePage employees={employees} addEmployee={addEmployee} />
    </div>
  );
};


