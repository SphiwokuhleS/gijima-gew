import { createSlice } from '@reduxjs/toolkit';

const getToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        return true;
    } else {
        return false;
    }
}

const initialState = {
    email: null,
    isAuthenticated: getToken(),
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState: (state, action) => {
            state.email = action.payload.email;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        clearAuthState: (state) => {
            state.email = null;
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { setAuthState, clearAuthState } = authSlice.actions;
export const authReducer =  authSlice.reducer;