import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginType {
  email: string;
  password: string;
  logged: boolean;
}

const initialState: LoginType = {
  email: '',
  password: '',
  logged: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginType>) {
      return action.payload;
    },
    logout() {
      return initialState;
    }
  }
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;