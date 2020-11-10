import React from 'react';
import styled from 'styled-components';

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
    <TodoLi onClick={onClick} completed={todo.completed}>
      <span>{todo.text}</span>
      <button onClick={onClickRemove}>삭제</button>
    </TodoLi>
  );
});

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
