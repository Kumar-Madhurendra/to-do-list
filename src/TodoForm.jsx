import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ addTodo, todos }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        if (title.trim().length === 0) {
            toast.info("Please Fill input", {
                autoClose: 2000,
            });
            return;
        }

        // Check if a todo with this title already exists
        const existingTodo = todos.find(todo => todo.title.toLowerCase() === title.trim().toLowerCase());
        if (existingTodo) {
            toast.warning("Task already exists!", {
                autoClose: 2000,
            });
            return;
        }

        const newTodo = {
            title: title,
            completed: false,
            id: uuid(),
        };
        addTodo(newTodo);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <input
                className="todoForm__input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="todoForm__btn">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
