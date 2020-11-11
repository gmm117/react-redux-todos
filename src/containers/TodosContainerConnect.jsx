import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    default:
      return todos;
  }
}

function TodosContainerConnect({
  todos,
  onAddTodo,
  onToggle,
  onRemove,
  onAllFilterTodo,
  onCompleteFilterTodo,
  onNonCompleteFilterTodo,
}) {
  return (
    <Todos
      todos={todos}
      onAddTodo={onAddTodo}
      onToggle={onToggle}
      onRemove={onRemove}
      onAllFilterTodo={onAllFilterTodo}
      onCompleteFilterTodo={onCompleteFilterTodo}
      onNonCompleteFilterTodo={onNonCompleteFilterTodo}
    />
  );
}

const mapStateToProps = (state) => ({
  todos: selectTodos(state.todos, state.visibility),
});

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (text) => dispatch(addTodo(text)),
  onToggle: (id) => dispatch(toggleTodo(id)),
  onRemove: (id) => dispatch(removeTodo(id)),
  onAllFilterTodo: () => dispatch(allFilterTodo()),
  onCompleteFilterTodo: () => dispatch(completeFilterTodo()),
  onNonCompleteFilterTodo: () => dispatch(nonCompleteFilterTodo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainerConnect);

TodosContainerConnect.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAllFilterTodo: PropTypes.func.isRequired,
  onCompleteFilterTodo: PropTypes.func.isRequired,
  onNonCompleteFilterTodo: PropTypes.func.isRequired,
};
