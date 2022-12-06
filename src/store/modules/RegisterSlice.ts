import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterType {
  uid: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}


const initialState: RegisterType = {
  uid: 0,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    register(state, action: PayloadAction<RegisterType>) {
      return action.payload;
    }
  }
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;
