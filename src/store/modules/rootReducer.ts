import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './usersSlice';
import tasksReducer from './tasksSlice';

export default combineReducers({
  usersReducer,
  tasksReducer
});
