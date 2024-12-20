import React from 'react';
import propTypes from 'prop-types';

const NewTaskForm = ({ handleAddTask }) => {
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" onKeyDown={onKeyDown} />
    </header>
  );
};

NewTaskForm.defaultProps = {
  handleAddTask: () => {},
};
NewTaskForm.propTypes = {
  handleAddTask: propTypes.func,
};

export default NewTaskForm;
