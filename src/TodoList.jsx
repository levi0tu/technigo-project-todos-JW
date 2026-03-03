import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext.jsx"

const TodoList = () => {
    const { todos = [], toggleTodo, removeTodo } = useContext(TodoContext);
    const remainingCount = todos.filter((todo) => !todo.completed).length;

    return (
        <section className="agenda">
            <div className="day-header">
                <p><span className="today-dot"></span></p>
            </div>

            {todos.map((todo) => (
                <div key={todo.id} className="todo-row">
                    <label className={`todo-label ${todo.completed ? "is-done" : ""}`}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span>{todo.text}</span>
                        <button className="remove" onClick={() => removeTodo(todo.id)}>Remove</button>
                    </label>
                </div>
            ))}
            <p>Total: {todos.length} Remaining: {remainingCount}</p>
        </section>
    )
}

export default TodoList;