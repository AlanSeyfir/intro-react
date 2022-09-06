import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
  // const [todos, setTodos] = useState('');

  return (
    <h2 className="TodoCounter">
      You completed {completed} of {total} TODOS
    </h2>
  );
};

export { TodoCounter };
