import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { ArrowUpDown, Filter, CheckCircle, Clock, List } from "lucide-react";
import "react-toastify/dist/ReactToastify.min.css";

// lifting the state up

function App() {
    // Load initial todos from localStorage or use default
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [
        { id: 1, title: "Learn Guitar", completed: false },
        { id: 2, title: "Learn React", completed: true },
        { id: 3, title: "Find Good waltz in Am", completed: false },
    ];
    const [todos, setTodos] = useState(savedTodos);
    const [sortOrder, setSortOrder] = useState('asc');
    const [filterStatus, setFilterStatus] = useState('all');

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Save sort order to localStorage
    useEffect(() => {
        localStorage.setItem('sortOrder', sortOrder);
    }, [sortOrder]);

    // Save filter status to localStorage
    useEffect(() => {
        localStorage.setItem('filterStatus', filterStatus);
    }, [filterStatus]);

    // Load sort order from localStorage on mount
    useEffect(() => {
        const savedSortOrder = localStorage.getItem('sortOrder');
        if (savedSortOrder) {
            setSortOrder(savedSortOrder);
        }
    }, []);

    // Load filter status from localStorage on mount
    useEffect(() => {
        const savedFilterStatus = localStorage.getItem('filterStatus');
        if (savedFilterStatus) {
            setFilterStatus(savedFilterStatus);
        }
    }, []);

    // Sort todos based on title
    const sortedTodos = [...todos].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.title.localeCompare(b.title);
        }
        return b.title.localeCompare(a.title);
    });

    // Filter todos based on status
    const filteredTodos = sortedTodos.filter(todo => {
        if (filterStatus === 'all') return true;
        if (filterStatus === 'completed') return todo.completed;
        if (filterStatus === 'incomplete') return !todo.completed;
        return false;
    });

    // Calculate statistics
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const incompleteCount = totalCount - completedCount;

    const addTodo = (newTodo) => {
        setTodos((prevState) => [...prevState, newTodo]);
    };
    
    const removeTodo = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    };
    
    const toggleCompleted = (id) => {
        setTodos((prevState) => {
            return prevState.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    };

    return (
        <motion.div 
            className="container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
            <motion.h1 
                className="main-title"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                ✨ Task Master ✨
            </motion.h1>

            {/* Statistics */}
            <motion.div 
                className="stats"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="stat-item">
                    <List size={20} />
                    <span>Total: {totalCount}</span>
                </div>
                <div className="stat-item">
                    <CheckCircle size={20} />
                    <span>Completed: {completedCount}</span>
                </div>
                <div className="stat-item">
                    <Clock size={20} />
                    <span>Pending: {incompleteCount}</span>
                </div>
            </motion.div>

            <motion.div 
                className="controls"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="sort-controls">
                    <motion.button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="control-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowUpDown size={18} />
                        Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                    </motion.button>
                </div>
                <div className="filter-controls">
                    <div className="filter-wrapper">
                        <Filter size={18} className="filter-icon" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="control-select"
                        >
                            <option value="all">All Tasks</option>
                            <option value="completed">Completed</option>
                            <option value="incomplete">Pending</option>
                        </select>
                    </div>
                </div>
            </motion.div>

            <TodoForm addTodo={addTodo} todos={todos} />
            
            <Todos
                todos={filteredTodos}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
            />
        </motion.div>
    );
}

export default App;
