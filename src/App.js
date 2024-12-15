import React from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const App = () => {
    return (
        <section className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList />
            </section>
            <Footer />
        </section>
    );
};

export default App;
