import { createContext, useState } from "react";

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
    const [todos, setTodos] = useState([...startdata]);

    const addTodo = (text) => {
        setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    };
    const toggleTodo = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    };
    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <AppContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
            {children}
        </AppContext.Provider>
    );
};