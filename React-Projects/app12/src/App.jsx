import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🗂 Task Tracker</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;