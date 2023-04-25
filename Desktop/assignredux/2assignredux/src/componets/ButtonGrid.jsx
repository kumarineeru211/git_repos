import React from 'react';
import { useDispatch } from 'react-redux';
import { updateButton } from '../actions/actions';

const ButtonGrid = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName) => {
    dispatch(updateButton(buttonName));
  };

  const buttonNames = [];

  for (let i = 1; i <= 30; i++) {
    buttonNames.push(`Button ${i}`);
  }

  return (
    <div>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} onClick={() => handleButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
