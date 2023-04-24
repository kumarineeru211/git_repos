// store.js
import { createStore } from 'redux';

const initialState = {
  tasks: [],
  counter: 0
};

const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const RESET_COUNTER = 'RESET_COUNTER';

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: true };
          }
          return task;
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    case RESET_COUNTER:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

export { ADD_TASK, COMPLETE_TASK, DELETE_TASK, INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER };
