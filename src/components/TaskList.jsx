import React from 'react';
import Task from './Task';

export const TaskList = () => {
    const tasks = [
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
    ];

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
                />
            ))}
        </ul>
    );
};

export default TaskList;
