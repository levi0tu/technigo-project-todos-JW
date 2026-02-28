import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext.jsx"

const TodoForm = () => {
    const { newTask } = useContext(TodoContext);

    return (
        <section>
            <h2> Add task </h2>
        </section>
    );
};

export default TodoForm;