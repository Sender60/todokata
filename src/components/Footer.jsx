import React from 'react';
import propTypes from 'prop-types';
import TasksFilter from './TasksFilter';

const Footer = ({ tasksCompleted, clearCompletedTasks, filter, onFilterChange }) => (
  <footer className="footer">
    <span className="todo-count">{`${tasksCompleted} ${tasksCompleted === 1 ? 'item' : 'items'} left`}</span>
    <TasksFilter filter={filter} onFilterChange={onFilterChange} />
    <button type="button" onClick={clearCompletedTasks} className="clear-completed">
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  tasksCompleted: 0,
  clearCompletedTasks: () => {},
  onFilterChange: () => {},
  filter: 'All',
};
Footer.propTypes = {
  tasksCompleted: propTypes.number,
  clearCompletedTasks: propTypes.func,
  onFilterChange: propTypes.func,
  filter: propTypes.string,
};

export default Footer;
