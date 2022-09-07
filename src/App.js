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
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchInput.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchInput.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const toggleCompletedTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  };

  const toggleDeletedTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos.length} />

      <TodoSearch searchInput={searchInput} setSearchInput={setSearchInput} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => toggleCompletedTodo(todo.text)}
            onDelete={() => toggleDeletedTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
