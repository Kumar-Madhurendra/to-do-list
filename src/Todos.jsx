import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Todo from "./Todo";
import { ClipboardList } from "lucide-react";

function Todos({ todos, toggleCompleted, removeTodo }) {
    if (todos.length === 0) {
        return (
            <motion.div
                className="empty-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <ClipboardList size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p>No tasks yet. Add your first task above!</p>
            </motion.div>
        );
    }

    return (
        <div>
            <AnimatePresence mode="popLayout">
                {todos.map((todo, index) => (
                    <motion.div
                        key={todo.id}
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        transition={{ 
                            duration: 0.3,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                        layout
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <Todo
                            {...todo}
                            toggleCompleted={toggleCompleted}
                            removeTodo={removeTodo}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default Todos;
