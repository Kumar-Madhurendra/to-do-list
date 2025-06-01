import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// lifting the state up

function App() {
    // Load initial todos from localStorage or use default
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [
        { id: 1, title: "Learn Guitar", completed: false },
        { id: 2, title: "Learn React", completed: true },
        { id: 3, title: "Find Good watlz in Am", completed: false },
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
        <div className="container">
            <ToastContainer />
            <h1 className="main-title">Todo List</h1>
            <div className="controls">
                <div className="sort-controls">
                    <button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="control-btn"
                    >
                        Sort {sortOrder === 'asc' ? '↑' : '↓'}
                    </button>
                </div>
                <div className="filter-controls">
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="control-select"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
            </div>
            <TodoForm addTodo={addTodo} todos={todos} />
            <Todos
                todos={filteredTodos}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
