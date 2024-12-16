import React from 'react';
import Task from './Task';

const TaskList = ({
    filteredTasks,
    handleDeletedTask,
    handleToggle,
    handleEditingTask,
    handleKeyDownEditingTask,
}) => {
    return (
        <ul className="todo-list">
            {filteredTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleDeletedTask={handleDeletedTask}
                    handleToggle={handleToggle}
                    handleEditingTask={handleEditingTask}
                    handleKeyDownEditingTask={handleKeyDownEditingTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
