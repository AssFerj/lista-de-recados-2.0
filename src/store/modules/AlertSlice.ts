import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlertType {
  type: 'success' | 'warning' | 'error' | '';
  message: string;
}

const initialState: AlertType = { message: '', type: '' };

const AlertSlice = createSlice({
  name: 'Alert',
  initialState,
  reducers: {
    setAlert(state, action: PayloadAction<AlertType>) {
      return action.payload;
    },
    clearAlert() {
      return initialState;
    }
  }
});

export const { setAlert, clearAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
