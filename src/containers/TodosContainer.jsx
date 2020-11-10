import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../modules/todos';
import {
  FILTER_ALL,
  FILTER_COMPLETE,
  FILTER_NONCOMPLETE,
  allFilterTodo,
  completeFilterTodo,
  nonCompleteFilterTodo,
} from '../modules/visibility';
import Todos from '../components/Todos';

function selectTodos(todos, filter) {
  switch (filter) {
    case FILTER_ALL:
      return todos;
    case FILTER_COMPLETE:
      return todos.filter((todo) => todo.completed);
    case FILTER_NONCOMPLETE:
      return todos.filter((todo) => !todo.completed);
  }
}

function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const visibility = useSelector((state) => state.visibility);
  const dispatch = useDispatch();

  const onAddTodo = (text) => dispatch(addTodo(text));
  const onToggle = (id) => dispatch(toggleTodo(id));
  const onRemove = (id) => dispatch(removeTodo(id));

  const onAllFilterTodo = () => dispatch(allFilterTodo());
  const onCompleteFilterTodo = () => dispatch(completeFilterTodo());
  const onNonCompleteFilterTodo = () => dispatch(nonCompleteFilterTodo());

  const activeUsers = useCallback(selectTodos(todos, visibility), [
    todos,
    visibility,
  ]);

  return (
    <Todos
      todos={activeUsers}
      onAddTodo={onAddTodo}
      onToggle={onToggle}
      onRemove={onRemove}
      onAllFilterTodo={onAllFilterTodo}
      onCompleteFilterTodo={onCompleteFilterTodo}
      onNonCompleteFilterTodo={onNonCompleteFilterTodo}
    />
  );
}

export default TodosContainer;
