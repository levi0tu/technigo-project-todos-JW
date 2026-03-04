import { createContext, useState } from "react";

export const TodoContext = createContext();

const startData = [
    {
        id: 1,
        text: "First task",
        completed: false,
        createdAt: new Date().toISOString()
    }
];

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(startData);

    const addTodo = (text) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: Date.now(),
                text: trimmed,
                completed: false,
                createdAt: new Date().toISOString()
            }
        ]);
    };
    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    };
    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};