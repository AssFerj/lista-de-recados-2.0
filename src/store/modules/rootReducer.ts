import { combineReducers } from '@reduxjs/toolkit';

import users from './usersSlice';
import tasks from './tasksSlice';

export default combineReducers({
  users,
  tasks
});
