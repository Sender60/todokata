import React, { useState } from 'react';
import propTypes from 'prop-types';

const NewTaskForm = ({ handleAddTask }) => {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [errorMinutes, setErrorMInutes] = useState('');
  const [errorSeconds, setErrorSeconds] = useState('');
  const [taskValue, setTaskValue] = useState(1);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (errorMinutes !== '' || errorSeconds !== '') return;
      const newValue = value === '' ? `Неизвестная задача ${taskValue}` : value;
      handleAddTask(newValue, minutes * 60 + Number(seconds));
      setValue('');
      setMinutes('');
      setSeconds('');
      setTaskValue(taskValue + 1);
    }
  };

  const handleMinutes = (e) => {
    if (!/^\d+$/.test(e.target.value)) {
      setErrorMInutes('Используйте цифровые значения минута');
    } else {
      setErrorMInutes('');
    }
    if (e.target.value === '') {
      setErrorMInutes('');
    }
    setMinutes(e.target.value);
  };

  const handleSeconds = (e) => {
    if (!/^\d+$/.test(e.target.value)) {
      setErrorSeconds('Используйте цифровые значения секунда');
    } else if (e.target.value > 59) {
      setErrorSeconds('Не более 59 секунд');
    } else {
      setErrorSeconds('');
    }
    if (e.target.value === '') {
      setErrorSeconds('');
    }
    setSeconds(e.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyDown={onKeyDown}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(e) => handleMinutes(e)}
          value={minutes}
          onKeyDown={onKeyDown}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          maxLength={2}
          onChange={(e) => handleSeconds(e)}
          value={seconds}
          onKeyDown={onKeyDown}
        />
        <button type="submit" style={{ display: 'none' }} aria-hidden />
      </form>
      {errorMinutes && <p style={{ color: 'red' }}>{errorMinutes}</p>}
      {errorSeconds && <p style={{ color: 'red' }}>{errorSeconds}</p>}
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
