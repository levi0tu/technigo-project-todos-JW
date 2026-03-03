import { useContext, useState } from "react";
import { TodoContext } from "./contexts/TodoContext.jsx"

const TodoForm = () => {
    const [newTask, setNewTask] = useState("");
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = newTask.trim();
        if (!text) return;
        addTodo(text);
        setNewTask("");
    };

    return (
        <section className="form-section">
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    className="todo-input"
                    type="text"
                    placeholder="Write a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} />
                <button className="todo-submit" type="submit">Add Task</button>
            </form>
        </section>
    );
};

export default TodoForm;