// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import TaskType from '../../types/TaskType';

// interface tasksState {
//   items: TaskType[];
// }

// const initialState: tasksState = {
//   items: []
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask: (state, action: PayloadAction<TaskType>) => {
//       state.items.push(action.payload);
//     },
//     deleteTask: (state, action: PayloadAction<number>) => {
//       state.items.splice(action.payload, 1);
//     }
//   }
// });

// export const { addTask, deleteTask } = tasksSlice.actions;

// export default tasksSlice.reducer;

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import TaskType from '../../types/TaskType';
import { RootState } from '../store';

const adapter = createEntityAdapter<TaskType>({
  selectId: item => item.description
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.tasks);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: adapter.getInitialState(),
  reducers: {
    addTask: adapter.addOne,
    updateTask: adapter.updateOne,
    removeTask: adapter.removeOne
  }
});

export const { addTask, updateTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
