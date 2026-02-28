import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext.jsx"

const TodoList = () => {
    const { todos = [], toggleTodo, removeTodo } = useContext(TodoContext);
    const remainingCount = todos.filter((todo) => !todo.completed).length;

    return (
        <section>
            <h2>To Do</h2>
            <p>Total: {todos.length} Remaining: {remainingCount}</p>
            <button className="remove">{removeTodo}</button>
        </section>
    )
}

export default TodoList;