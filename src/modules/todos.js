import { v4 as uuidv4 } from 'uuid';

// Action Types
const ADD_TODO = 'todos/ADD_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

// Reducer
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const { id, text } = action.payload;
      return state.concat({
        id: id,
        text: text,
        completed: false,
      });
    case TOGGLE_TODO:
      return state.map((data) =>
        data.id === action.payload.id
          ? {
              ...data,
              completed: !data.completed,
            }
          : data
      );
    case REMOVE_TODO:
      return state.filter((data) => data.id !== action.payload.id);
    default:
      return state;
  }
}
