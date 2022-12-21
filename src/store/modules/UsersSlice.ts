import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '..';
import { UserType } from '../../types';

// const initialState: UsersTypes = [];

// const UsersSlice = createSlice({
//   name: 'users',
//   initialState: initialState,
//   reducers: {
//     signUpUser(state, { payload }: PayloadAction<UserType>) {
//       state.push(...state, payload);
//     }
//   }
// });

// export const { signUpUser } = UsersSlice.actions;
// export default UsersSlice.reducer;

const usersAdapter = createEntityAdapter<UserType>({
  selectId: item => item.email
});

export const { selectAll: selectUser, selectById: selectUserById } = usersAdapter.getSelectors(
  (state: RootState) => state.users
);

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    createUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne
  }
});

export const { createUser, updateUser } = UsersSlice.actions;
export default UsersSlice.reducer;
