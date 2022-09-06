import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = () => {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Aqui debe ser un modal')}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
