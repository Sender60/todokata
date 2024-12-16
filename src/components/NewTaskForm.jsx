import React from 'react';

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
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onKeyDown={onKeyDown}
            />
        </header>
    );
};

export default NewTaskForm;
