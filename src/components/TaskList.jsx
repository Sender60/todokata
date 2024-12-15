import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: 'Completed task',
            created: '17 seconds ago',
            completed: true,
            editing: false,
        },
        {
            id: 2,
            description: 'Editing task',
            created: '5 minutes ago',
            completed: false,
            editing: true,
        },
        {
            id: 3,
            description: 'Active task',
            created: '5 minutes ago',
            completed: false,
            editing: false,
        },
    ]);

    const onDeleted = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleToggle = (id) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
        );
    };

    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    created={task.created}
                    completed={task.completed}
                    editing={task.editing}
                    onDeleted={onDeleted}
                    handleToggle={handleToggle}
                />
            ))}
        </ul>
    );
};

export default TaskList;
