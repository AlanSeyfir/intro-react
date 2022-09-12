import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {
  // const [todos, setTodos] = useState('');

  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      You completed {completedTodos} of {totalTodos} TODOS
    </h2>
  );
};

export { TodoCounter };
