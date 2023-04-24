// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COMPLETE_TASK, DELETE_TASK } from './store';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleCompleteTask = taskId => {
    dispatch({ type: COMPLETE_TASK, payload: taskId });
  };

  const handleDeleteTask = taskId => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => handleCompleteTask(task.id)} />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
