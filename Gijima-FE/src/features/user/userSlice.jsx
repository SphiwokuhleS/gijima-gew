import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

const initialState = {
    email: null,
    isAuthenticated: self.getToken(),
    token: null,
};

export function getToken() {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp > currentTime) {
                return true;
            } else {
                localStorage.removeItem('token');
                return false;
            }
        } catch (error) {
            console.log(error);
            localStorage.removeItem('token');
        }
    } else {
        return false;
    }
}

if (token) {
    try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds

        if (decodedToken.exp > currentTime) {
            initialState = {
                email: decodedToken.email,
                isAuthenticated: true,
                token: token,
            };
        } else {
            localStorage.removeItem('token'); // Token expired
        }
    } catch (error) {
        localStorage.removeItem('token'); // Invalid token
    }
}

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
export default authSlice.reducer;