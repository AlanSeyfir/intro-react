import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  const onCompleteButton = () => {
    alert('Agregaste el todo: ' + props.text);
  };

  const onDeleteButton = () => {
    alert('Eliminaste el todo: ' + props.text);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onCompleteButton}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDeleteButton}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
