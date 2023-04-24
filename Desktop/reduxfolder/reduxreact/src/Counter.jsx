import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from './store';

function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNTER });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNTER });
  };

  const handleReset = () => {
    dispatch({ type: RESET_COUNTER });
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
