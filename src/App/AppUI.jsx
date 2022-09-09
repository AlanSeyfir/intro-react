import React from 'react';
import { TodoContext } from '../components/TodoContext';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

const AppUI = () => {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => {
          return (
            <TodoList>
              {error && <p>Ups!</p>}
              {loading && <p>Estamos cargando...</p>}
              {!loading && !searchedTodos.length && (
                <p>Crea tu primer Todo! :D</p>
              )}

              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          );
        }}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
};

export default AppUI;
