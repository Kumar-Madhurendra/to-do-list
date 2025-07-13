import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";

function TodoForm({ addTodo, todos }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        if (title.trim().length === 0) {
            toast.info("Please enter a task", {
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
        
        // Success feedback
        toast.success("Task added successfully! ✨", {
            autoClose: 2000,
        });
    }
    
    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <input
                className="todoForm__input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
                maxLength={100}
            />
            <button type="submit" className="todoForm__btn">
                <Plus size={20} />
                <span>Add Task</span>
            </button>
        </form>
    );
}

export default TodoForm;
