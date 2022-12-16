import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersTypes, UserType } from '../../types';

const initialState: UsersTypes = [];

const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserType>) {
      state.push(action.payload);
    }
  }
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
