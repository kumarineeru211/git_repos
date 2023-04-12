import React from 'react';

export default function Profile({ person }) {
  return (
    <>
    <p>
      {person.name}
    </p>
    <p>{person.lastname}</p> 
    <p>
      {person.age}
    </p>
    
    </>
  );
}