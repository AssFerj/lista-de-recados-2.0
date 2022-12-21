import { combineReducers } from '@reduxjs/toolkit';

import login from './LoginSlice';
import users from './UsersSlice';

export default combineReducers({
  login,
  users
});
