import React, { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
// import TodosContainer from './containers/TodosContainer';
import TodosContainerConnect from './containers/TodosContainerConnect';
const TodosDispatchContext = createContext(null);

function useTodoDispatch() {
  const context = useContext(TodosDispatchContext);
  if (!context) {
    throw new Error('connot find TodosDispatchContext');
  }
  return context;
}

function App() {
  const dispatch = useDispatch();

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosContainerConnect useTodoDispatch={useTodoDispatch} />
    </TodosDispatchContext.Provider>
  );
}

export default App;
