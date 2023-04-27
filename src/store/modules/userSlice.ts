import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    }
  }
});

export const { create, clear } = userSlice.actions;
export default userSlice.reducer;
