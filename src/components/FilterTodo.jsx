import React from 'react';

function FilterTodo({
  onAllFilterTodo,
  onCompleteFilterTodo,
  onNonCompleteFilterTodo,
}) {
  return (
    <div>
      <button onClick={() => onAllFilterTodo()}>전체</button>
      <button onClick={() => onCompleteFilterTodo()}>완료</button>
      <button onClick={() => onNonCompleteFilterTodo()}>미완료</button>
    </div>
  );
}

export default FilterTodo;
