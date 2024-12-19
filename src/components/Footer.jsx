import React from 'react';
import TasksFilter from './TasksFilter';
import propTypes from 'prop-types';

const Footer = ({ tasksCompleted, clearTasks, filter, onFilterChange }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                {tasksCompleted} {tasksCompleted === 1 ? 'item' : 'items'} left
            </span>
            <TasksFilter filter={filter} onFilterChange={onFilterChange} />
            <button onClick={() => clearTasks()} className="clear-completed">
                Clear completed
            </button>
        </footer>
    );
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
