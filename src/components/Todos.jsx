import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EnrollTodo from './EnrollTodo';
import ContentTodo from './ContentTodo';
import FilterTodo from './FilterTodo';

export default class Todos extends Component {
  render() {
    return (
      <>
        <EnrollTodo onAddTodo={this.props.onAddTodo} />
        <ContentTodo
          todos={this.props.todos}
          onRemove={this.props.onRemove}
          onToggle={this.props.onToggle}
        />
        <FilterTodo
          onAllFilterTodo={this.props.onAllFilterTodo}
          onCompleteFilterTodo={this.props.onCompleteFilterTodo}
          onNonCompleteFilterTodo={this.props.onNonCompleteFilterTodo}
        />
      </>
    );
  }
}
// function Todos({
//   todos,
//   onAddTodo,
//   onToggle,
//   onRemove,
//   onAllFilterTodo,
//   onCompleteFilterTodo,
//   onNonCompleteFilterTodo,
// }) {
//   return (
//     <>
//       <EnrollTodo onAddTodo={onAddTodo} />
//       <ContentTodo todos={todos} onRemove={onRemove} onToggle={onToggle} />
//       <FilterTodo
//         onAllFilterTodo={onAllFilterTodo}
//         onCompleteFilterTodo={onCompleteFilterTodo}
//         onNonCompleteFilterTodo={onNonCompleteFilterTodo}
//       />
//     </>
//   );
// }

// export default Todos;

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onAllFilterTodo: PropTypes.func.isRequired,
  onCompleteFilterTodo: PropTypes.func.isRequired,
  onNonCompleteFilterTodo: PropTypes.func.isRequired,
};
