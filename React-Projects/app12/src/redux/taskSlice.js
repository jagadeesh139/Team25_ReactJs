import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
  completedTasks: [],
  pendingTasks: [],
  highPriorityTasks: [],
  categories: ['Work', 'Personal', 'Urgent', 'Other'],
};

const taskSlice = createSlice({
  name: 'taskTracker',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: uuidv4(), ...action.payload });
    },
    markComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = 'completed';
        state.completedTasks.push(task);
        state.pendingTasks = state.pendingTasks.filter((task) => task.id !== action.payload);
      }
    },
    filterTasks: (state, action) => {
      const { priority } = action.payload;
      if (priority === 'high') {
        state.highPriorityTasks = state.tasks.filter(
          (task) => task.priority === 'high' && task.status !== 'completed'
        );
      } else if (priority === 'all') {
        state.pendingTasks = state.tasks.filter((task) => task.status !== 'completed');
      }
    },
  },
});

export const { addTask, markComplete, filterTasks } = taskSlice.actions;
export default taskSlice.reducer;