import React, { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Completed task',
      created: new Date(Date.now() - 17 * 1000 * 60),
      completed: true,
      editing: false,
      seconds: 1200,
    },
    {
      id: 2,
      description: 'Editing task',
      created: new Date(Date.now() - 5 * 1000 * 60),
      completed: false,
      editing: true,
      seconds: 1200,
    },
    {
      id: 3,
      description: 'Active task',
      created: new Date(Date.now() - 5 * 1000 * 60),
      completed: false,
      editing: false,
      seconds: 1200,
    },
  ]);

  const [filter, setFilter] = useState('All');

  const handleDeletedTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (description, seconds) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const created = new Date().toString();
    const completed = false;
    const editing = false;

    setTasks([
      ...tasks,
      {
        id,
        description,
        created,
        completed,
        editing,
        seconds,
      },
    ]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };
  const tasksCompleted = tasks.filter((task) => !task.completed).length;

  const handleEditingTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, editing: true, completed: false } : task)));
  };

  const handleKeyDownEditingTask = (e, id, newDescription, originalDescription, setDescription) => {
    if (e.key === 'Enter') {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              editing: false,
              completed: false,
              description: newDescription,
            };
          }
          return task;
        }),
      );
    }
    if (e.key === 'Escape') {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              editing: false,
              completed: false,
              description: originalDescription,
            };
          }
          return task;
        }),
      );
      setDescription(originalDescription);
    }
  };

  const handleFilterChange = (filterChange) => setFilter(filterChange);

  const clearCompletedTasks = () => setTasks(tasks.filter((task) => !task.completed));

  return (
    <section className="todoapp">
      <NewTaskForm handleAddTask={handleAddTask} />
      <section className="main">
        <TaskList
          tasks={tasks}
          handleDeletedTask={handleDeletedTask}
          handleToggle={handleToggle}
          handleEditingTask={handleEditingTask}
          handleKeyDownEditingTask={handleKeyDownEditingTask}
          filter={filter}
        />
      </section>
      <Footer
        filter={filter}
        onFilterChange={handleFilterChange}
        tasksCompleted={tasksCompleted}
        clearCompletedTasks={clearCompletedTasks}
      />
    </section>
  );
}

export default App;
