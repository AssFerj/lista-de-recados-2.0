import { combineReducers } from '@reduxjs/toolkit';

import login from './LoginSlice';
import register from './RegisterSlice';

export default combineReducers({
  login,
  register
});
