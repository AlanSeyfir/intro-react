// import './App.css';

import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useState } from 'react';

const defaultTodos = [
  {
    text: 'Cortar papa',
    completed: true,
  },
  {
    text: 'Jugar genshin',
    completed: true,
  },
  {
    text: 'Aprender react pa ganar dinero',
    completed: false,
  },
  {
    text: 'Nueva tarea ',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const [searchInput, setSearchInput] = useState('');

  const completedTodos = todos.filter((todo) => todo.completed);
  console.log(completedTodos.length);
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos.length} />

      <TodoSearch searchInput={searchInput} setSearchInput={setSearchInput} />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
