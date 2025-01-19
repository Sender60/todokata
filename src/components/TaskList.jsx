import React from 'react';
import propTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, handleDeletedTask, handleToggle, handleEditingTask, handleKeyDownEditingTask, filter }) => (
  <ul className="todo-list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        handleDeletedTask={handleDeletedTask}
        handleToggle={handleToggle}
        handleEditingTask={handleEditingTask}
        handleKeyDownEditingTask={handleKeyDownEditingTask}
        className={
          filter === 'All' || (filter === 'Active' && !task.completed) || (filter === 'Completed' && task.completed)
            ? ''
            : 'hidden'
        }
      />
    ))}
  </ul>
);

TaskList.defaultProps = {
  handleDeletedTask: () => {},
  handleToggle: () => {},
  handleEditingTask: () => {},
  handleKeyDownEditingTask: () => {},
};
TaskList.propTypes = {
  handleDeletedTask: propTypes.func,
  handleToggle: propTypes.func,
  handleEditingTask: propTypes.func,
  handleKeyDownEditingTask: propTypes.func,
};

export default TaskList;
