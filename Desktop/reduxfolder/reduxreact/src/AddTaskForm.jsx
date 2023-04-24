// AddTaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from './store';

function AddTaskForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch({ type: ADD_TASK, payload: { id: Date.now(), text, completed: false } });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
