import { useContext } from "react";
import { AppContext } from "./contexts/ListContext.jsx";

const TodoList = () => {
    const { todos = [], toggleTodo, removeTodo } = useContext(AppContext);
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