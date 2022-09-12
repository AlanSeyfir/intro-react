import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChangeTodo = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO! :D</label>
      <textarea
        value={newTodoValue}
        onChange={onChangeTodo}
        placeholder="Cortar cebolla para el almuerzo xd"
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
          onClick={onSubmit}
        >
          Añadir Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
