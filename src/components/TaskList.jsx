import React from 'react';
import propTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ filteredTasks, handleDeletedTask, handleToggle, handleEditingTask, handleKeyDownEditingTask }) => (
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

TaskList.defaultProps = {
  filteredTasks: [],
  handleDeletedTask: () => {},
  handleToggle: () => {},
  handleEditingTask: () => {},
  handleKeyDownEditingTask: () => {},
};
TaskList.propTypes = {
  filteredTasks: propTypes.arrayOf(),
  handleDeletedTask: propTypes.func,
  handleToggle: propTypes.func,
  handleEditingTask: propTypes.func,
  handleKeyDownEditingTask: propTypes.func,
};

export default TaskList;
