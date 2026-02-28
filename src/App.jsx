import React from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { AppDataProvider } from './contexts/ListContext.jsx';

export const App = () => {
  return (
    <AppDataProvider>
      <div>
        <h1>To Do</h1>
        <TodoForm />
        <TodoList />
      </div>
    </AppDataProvider>
  );
}

export default App;
