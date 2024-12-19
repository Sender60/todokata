import React, { useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { ru } from 'date-fns/locale';

export const Task = ({
    task,
    handleDeletedTask,
    handleToggle,
    handleEditingTask,
    handleKeyDownEditingTask,
}) => {
    const [isDescription, setDescription] = useState(task.description);

    return (
        <>
            <li className={task.completed ? 'completed' : task.editing ? 'editing' : ''}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                    />
                    <label>
                        <span className="description">{task.description}</span>
                        <span className="created">
                            {formatDistanceToNowStrict(task.created, {
                                addSuffix: true,
                                locale: ru,
                            })}
                        </span>
                    </label>
                    <button
                        onClick={() => handleEditingTask(task.id)}
                        className="icon icon-edit"></button>
                    <button
                        onClick={() => handleDeletedTask(task.id)}
                        className="icon icon-destroy"></button>
                </div>
                {task.editing && (
                    <input
                        type="text"
                        className="edit"
                        value={isDescription}
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyDown={(e) => handleKeyDownEditingTask(e, task.id, isDescription)}
                    />
                )}
            </li>
        </>
    );
};

export default Task;
