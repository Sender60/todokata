import React from 'react';
import propTypes from 'prop-types';
import TasksFilter from './TasksFilter';

const Footer = ({ tasksCompleted, clearTasks, filter, onFilterChange }) => {
  <footer className="footer">
    <span className="todo-count">
      {tasksCompleted}
      {tasksCompleted === 1 ? 'item' : 'items'}
      {console.log(tasksCompleted)}
      {console.log(tasksCompleted)}
      left
    </span>
    <TasksFilter filter={filter} onFilterChange={onFilterChange} />
    <button type="button" onClick={() => clearTasks()} className="clear-completed">
      Clear completed
    </button>
  </footer>;
};

Footer.defaultProps = {
  tasksCompleted: 0,
  clearTasks: () => {},
  onFilterChange: () => {},
  filter: 'All',
};
Footer.propTypes = {
  tasksCompleted: propTypes.number,
  clearTasks: propTypes.func,
  onFilterChange: propTypes.func,
  filter: propTypes.string,
};

export default Footer;
