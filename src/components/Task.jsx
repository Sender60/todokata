import React from 'react';

export const Task = ({ id, description, created, completed, editing, onDeleted, handleToggle }) => {
    return (
        <>
            <li className={completed ? 'completed' : editing ? 'editing' : ''}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={completed}
                        onChange={() => handleToggle(id)}
                    />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button onClick={() => onDeleted(id)} className="icon icon-destroy"></button>
                </div>
                {editing && (
                    <input
                        type="text"
                        className="edit"
                        value={description}
                        onChange={(e) => (description = e.target.value)}
                    />
                )}
            </li>
        </>
    );
};

export default Task;
