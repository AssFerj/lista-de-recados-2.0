import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import UserType from '../../types/UserType';
import { RootState } from '../store';

const adapter = createEntityAdapter<UserType>({
  selectId: item => item.email
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.users);

const usersSlice = createSlice({
  name: 'users',
  initialState: adapter.getInitialState(),
  reducers: {
    addUser: adapter.addOne,
    updateUser: adapter.updateOne,
    removeUser: adapter.removeOne
  }
});

export const { addUser, updateUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
