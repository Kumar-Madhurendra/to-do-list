import React from "react";
import { Trash2, CheckCircle, Circle } from "lucide-react";

function Todo({ id, completed, title, toggleCompleted, removeTodo }) {
    const handleToggle = () => {
        toggleCompleted(id);
    };

    const handleDelete = () => {
        removeTodo(id);
    };

    return (
        <div className="todo">
            <div className="todo-title">
                <button
                    type="button"
                    onClick={handleToggle}
                    className="checkbox-btn"
                    aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
                >
                    {completed ? (
                        <CheckCircle size={24} className="check-icon" />
                    ) : (
                        <Circle size={24} className="circle-icon" />
                    )}
                </button>
                <p className={`${completed ? "completed" : ""}`}>{title}</p>
            </div>
            <button
                type="button"
                className="cross-btn"
                onClick={handleDelete}
                aria-label="Delete task"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}

export default Todo;
