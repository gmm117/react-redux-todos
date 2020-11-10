import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EnrollTodo({ onAddTodo }) {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText('');
  };

  return (
    <div style={{ paddingBottom: '10px' }}>
      <input onChange={onChange} value={text} />
      <button onClick={onClick}>등록</button>
    </div>
  );
}

export default EnrollTodo;

EnrollTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
