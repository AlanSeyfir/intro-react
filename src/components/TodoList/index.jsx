import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
  return (
    <React.Fragment>
      <ul>{props.children}</ul>
    </React.Fragment>
  );
};

export { TodoList };
