import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import LogedUserType from '../../types/LogedUserType';

const initialState: LogedUserType = {
  email: '',
  password: '',
  remenber: false
};

const userSlice = createSlice({
  name: 'logedUser',
  initialState,
  reducers: {
    addLogedUser(state, action: PayloadAction<LogedUserType>) {
      state = action.payload;
    }
  }
});

export const { addLogedUser } = userSlice.actions;
export default userSlice.reducer;
