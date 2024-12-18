import React, { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: 'Completed task',
            created: new Date(Date.now() - 17 * 1000 * 60),
            completed: true,
            editing: false,
        },
        {
            id: 2,
            description: 'Editing task',
            created: new Date(Date.now() - 5 * 1000 * 60),
            completed: false,
            editing: true,
        },
        {
            id: 3,
            description: 'Active task',
            created: new Date(Date.now() - 5 * 1000 * 60),
            completed: false,
            editing: false,
        },
    ]);

    const [filter, setFilter] = useState('All');

    const handleDeletedTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleAddTask = (description) => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const created = new Date().toString();
        const completed = false;
        const editing = false;

        setTasks([...tasks, { id, description, created, completed, editing }]);
    };

    const handleToggle = (id) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
        );
    };
    const tasksCompleted = tasks.filter((task) => !task.completed).length;

    const handleEditingTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, editing: true, completed: false } : task,
            ),
        );
    };

    const handleKeyDownEditingTask = (e, id, newDescription) => {
        if (e.key === 'Enter') {
            setTasks(
                tasks.map((task) =>
                    task.id === id
                        ? { ...task, editing: false, completed: false, description: newDescription }
                        : task,
                ),
            );
        }
    };

    const filteredTasks = tasks.filter((task) => {
        switch (filter) {
            case 'All':
                return task;
            case 'Active':
                return !task.completed;
            case 'Completed':
                return task.completed;
            default:
                return task;
        }
    });

    const handleFilterChange = (filter) => setFilter(filter);

    return (
        <section className="todoapp">
            <NewTaskForm handleAddTask={handleAddTask} />
            <section className="main">
                <TaskList
                    filteredTasks={filteredTasks}
                    handleDeletedTask={handleDeletedTask}
                    handleToggle={handleToggle}
                    handleEditingTask={handleEditingTask}
                    handleKeyDownEditingTask={handleKeyDownEditingTask}
                />
            </section>
            <Footer
                filter={filter}
                onFilterChange={handleFilterChange}
                tasksCompleted={tasksCompleted}
                clearTasks={() => setTasks([])}
            />
        </section>
    );
};

export default App;
