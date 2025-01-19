import React, { useState } from 'react';
import propTypes from 'prop-types';

const NewTaskForm = ({ handleAddTask }) => {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [errorSeconds, setErrorSeconds] = useState('');
  const [errorValue, setErrorValue] = useState('');

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.type === 'submit') {
      if (value === '' || minutes === '' || seconds === '') {
        setErrorValue('Заполните все поля');
        return;
      }
      if (minutes < 0 || seconds < 0) {
        setErrorValue('Время не может быть отрицательным');
        return;
      }
      handleAddTask(value, minutes * 60 + Number(seconds));
      setValue('');
      setMinutes('');
      setSeconds('');
      setErrorValue('');
    }
  };

  const handleSeconds = (e) => {
    if (e.target.value > 59) {
      setErrorSeconds('Не более 59 секунд');
    } else {
      setErrorSeconds('');
    }
    setSeconds(e.target.value);
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
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          maxLength={2}
          onChange={(e) => handleSeconds(e)}
          value={seconds}
        />
        <button type="submit" style={{ display: 'none' }} aria-hidden />
      </form>
      {errorSeconds && <p style={{ color: 'red' }}>{errorSeconds}</p>}
      {errorValue && <p style={{ color: 'red' }}>{errorValue}</p>}
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
