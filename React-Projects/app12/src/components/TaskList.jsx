import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markComplete, filterTasks } from '../redux/taskSlice';

const TaskList = () => {
  const { tasks, completedTasks, pendingTasks, highPriorityTasks } = useSelector(
    (state) => state.taskTracker
  );
  const dispatch = useDispatch();

  const [filter, setFilter] = React.useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    dispatch(filterTasks({ priority: e.target.value }));
  };

  const getFilteredTasks = () => {
    if (filter === 'high') return highPriorityTasks;
    if (filter === 'completed') return completedTasks;
    return pendingTasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      <div className="flex mb-4 gap-2">
        <select value={filter} onChange={handleFilterChange} className="border p-2">
          <option value="all">All</option>
          <option value="high">High Priority</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {filteredTasks.map((task) => (
        <div key={task.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{task.name}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <p>Category: {task.category}</p>
          <div className="mt-2">
            <button
              onClick={() => dispatch(markComplete(task.id))}
              className="bg-green-500 text-white px-3 py-1 rounded mr-2"
            >
              Mark Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;