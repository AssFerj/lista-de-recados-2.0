import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialState: RegisterType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        register(state, action: PayloadAction<RegisterType>){
            return action.payload;
        }
    }
})

export const { register } = registerSlice.actions;
export default registerSlice.reducer;