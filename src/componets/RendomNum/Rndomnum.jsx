import React, { useState } from 'react';

export default function Rndomnum() {
    const [data, setData] = useState([]);

    function generateRandomValue(){
      return Math.floor(Math.random() * 100);
    };
  
    function updateTable (){
      const randomValue = generateRandomValue();
      setData([...data, randomValue]);
    };
  return (
    <div>
      <h1>Random Values</h1>
      <button onClick={updateTable}>Generate Random Value</button>
      {data.map((value, index) => (
        <ul key={index}>
          <li>{value}</li>
        </ul>
      ))}
    </div>
  )
}
