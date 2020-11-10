import React from 'react';
import EnrollTodo from './EnrollTodo';
import ContentTodo from './ContentTodo';
import FilterTodo from './FilterTodo';

function Todos({
  todos,
  onAddTodo,
  onToggle,
  onRemove,
  onAllFilterTodo,
  onCompleteFilterTodo,
  onNonCompleteFilterTodo,
}) {
  return (
    <>
      <EnrollTodo onAddTodo={onAddTodo} />
      <ContentTodo todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <FilterTodo
        onAllFilterTodo={onAllFilterTodo}
        onCompleteFilterTodo={onCompleteFilterTodo}
        onNonCompleteFilterTodo={onNonCompleteFilterTodo}
      />
    </>
  );
}

export default Todos;
