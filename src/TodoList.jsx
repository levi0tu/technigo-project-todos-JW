import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext.jsx"

const TodoList = () => {
    const { todos = [], toggleTodo, removeTodo } = useContext(TodoContext);
    const remainingCount = todos.filter((todo) => !todo.completed).length;

    return (
        <section className="header">
            <div className="tasks-header">
                <h2>To Do</h2>
                <p><span className="today-dot"></span></p>
            </div>

            <div className="task-list">
                {todos.map((todo) => (
                    <article key={todo.id} className={`task-card ${todo.completed ? "is-done" : ""}`}>
                        <div className="task-content">
                            <h3>{todo.text}</h3>
                        </div>
                        <button
                            type="button"
                            className="check-btn"
                            onClick={() => toggleTodo(todo.id)}
                            aria-label={`Mark ${todo.text} as ${todo.completed ? "not done" : "done"}`}
                        >
                            {todo.completed ? "✓" : ""}
                        </button>
                    </article>
                ))}
            </div>
            <p>Total: {todos.length} Remaining: {remainingCount}</p>
        </section>
    )
}

export default TodoList;