import React from 'react';
import TasksFilter from './TasksFilter';

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

export default Footer;
