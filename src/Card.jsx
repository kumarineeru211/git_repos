import React from 'react';
 import './card.css';
 


function Card({ user }) {
  return (
    <div className="card" style={{marginTop: '100px'}}>
      <img className='img' src={user.image} alt={user.name}  />
      <div className="details">
        <h2 className="name">{user.name}</h2>
        <p className="designation">{user.designation}</p>
        <p className="description">{user.description}</p>
      </div>
    </div>
  );
}

export default Card;
