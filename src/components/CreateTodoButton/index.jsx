import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const onClickButton = () => {
    //One liner 😎
    setOpenModal(!openModal);

    // if (openModal) {
    //   setOpenModal(false);
    // } else {
    //   setOpenModal(true);
    // }
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};

export { CreateTodoButton };
