import React from 'react';
import Task from './Task';
import propTypes from 'prop-types';

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

TaskList.defaultProps = {
    filteredTasks: [],
    handleDeletedTask: () => {},
    handleToggle: () => {},
    handleEditingTask: () => {},
    handleKeyDownEditingTask: () => {},
};
TaskList.propTypes = {
    filteredTasks: propTypes.array,
    handleDeletedTask: propTypes.func,
    handleToggle: propTypes.func,
    handleEditingTask: propTypes.func,
    handleKeyDownEditingTask: propTypes.func,
};

export default TaskList;
