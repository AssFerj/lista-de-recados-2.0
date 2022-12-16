import { combineReducers } from '@reduxjs/toolkit';

import login from './LoginSlice';
import users from './UserSlice';
import alert from './AlertSlice';

export default combineReducers({
  login,
  users,
  alert
});
