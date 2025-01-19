import React, { useState } from 'react';
import propTypes from 'prop-types';

const NewTaskForm = ({ handleAddTask }) => {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.type === 'submit') {
      handleAddTask(value, minutes * 60 + Number(seconds));
      setValue('');
      setMinutes('');
      setSeconds('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        className="new-todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          onKeyDown(e);
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          required
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          required
          min={0}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          maxLength={2}
          onChange={(e) => setSeconds(e.target.value)}
          value={seconds}
          required
          min={0}
          max={59}
          title="Не более 59 секунд"
        />
        <button type="submit" style={{ display: 'none' }} aria-hidden />
      </form>
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
