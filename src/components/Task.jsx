import React, { useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { ru } from 'date-fns/locale';
import cn from 'classnames';
import Timer from './Timer';

const Task = ({ task, handleDeletedTask, handleToggle, handleEditingTask, handleKeyDownEditingTask, className }) => {
  const [isDescription, setDescription] = useState(task.description);

  const taskClassName = cn('task', {
    completed: task.completed,
    editing: task.editing,
  });

  return (
    <li className={cn(taskClassName, className)}>
      <div className="view">
        <input
          id={`toggle-${task.id}`}
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggle(task.id)}
        />
        <label htmlFor="toggle">
          <span className="description">{task.description}</span>
          <Timer seconds={task.seconds} completed={task.completed} />
          <span className="created">
            {formatDistanceToNowStrict(task.created, {
              addSuffix: true,
              locale: ru,
            })}
          </span>
        </label>
        <button
          type="button"
          onClick={() => handleEditingTask(task.id)}
          className="icon icon-edit"
          aria-label="Редактировать"
        />
        <button
          type="button"
          onClick={() => handleDeletedTask(task.id)}
          className="icon icon-destroy"
          aria-label="Удалить"
        />
      </div>
      {task.editing && (
        <input
          type="text"
          className="edit"
          value={isDescription}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(e) => handleKeyDownEditingTask(e, task.id, isDescription, task.description, setDescription)}
        />
      )}
    </li>
  );
};

export default Task;
