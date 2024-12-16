import React from 'react';

const TasksFilter = ({ filter, onFilterChange }) => {
    return (
        <ul className="filters">
            <li>
                <button
                    className={filter === 'All' ? 'selected' : ''}
                    onClick={() => onFilterChange('All')}>
                    All
                </button>
            </li>
            <li>
                <button
                    className={filter === 'Active' ? 'selected' : ''}
                    onClick={() => onFilterChange('Active')}>
                    Active
                </button>
            </li>
            <li>
                <button
                    className={filter === 'Completed' ? 'selected' : ''}
                    onClick={() => onFilterChange('Completed')}>
                    Completed
                </button>
            </li>
        </ul>
    );
};

export default TasksFilter;
