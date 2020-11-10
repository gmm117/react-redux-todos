import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoLi = styled.li`
  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')}}
`;

const TodoItem = React.memo(function TodoItem({ todo, onToggle, onRemove }) {
  const onClick = (e) => {
    onToggle(todo.id);
  };

  const onClickRemove = (e) => {
    onRemove(todo.id);
  };

  return (
    // <li
    //   style={{ textDecoration: todo.done ? "line-through" : "none" }}
    //   onClick={() => onToggle(todo.id)}
    // ></li>
    <TodoLi onClick={onClick} completed={todo.completed}>
      <span>{todo.text}</span>
      <button onClick={onClickRemove}>삭제</button>
    </TodoLi>
  );
});

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

function ContentTodo({ todos, onToggle, onRemove }) {
  return (
    <div style={{ paddingBottom: '20px' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default React.memo(ContentTodo);

ContentTodo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};
