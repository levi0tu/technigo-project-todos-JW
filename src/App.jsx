import React from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { TodoProvider } from './contexts/TodoContext.jsx';

export const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>To Do</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
