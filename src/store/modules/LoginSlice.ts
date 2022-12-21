import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface login {
  email: string;
  password: string;
  isLogged: boolean;
}

const adapter = createEntityAdapter<login>({
  selectId: item => item.email
});

export const { selectAll, selectById } = adapter.getSelectors((state: any) => state.login);

const loginSlice = createSlice({
  name: 'login',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne
  }
});

export const { addOne } = loginSlice.actions;
export default loginSlice.reducer;
