import React from 'react';

const TasksFilter = ({ filter, onFilterChange }) => {
  TasksFilter.defaultProps = {
    filter: 'All',
    onFilterChange: () => {},
  };

  return (
    <ul className="filters">
      <li>
        <button type="button" className={filter === 'All' ? 'selected' : ''} onClick={() => onFilterChange('All')}>
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          className={filter === 'Active' ? 'selected' : ''}
          onClick={() => onFilterChange('Active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={filter === 'Completed' ? 'selected' : ''}
          onClick={() => onFilterChange('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
