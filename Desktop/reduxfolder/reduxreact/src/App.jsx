import React from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm />
      <TaskList />
      <Counter />
    </div>
  );
}

export default App;
