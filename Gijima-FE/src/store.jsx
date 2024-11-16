import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from './features/auth/userSlice';
import {listedJobsReducer} from "./features/bidderJobs/listedJobsSlice.jsx";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        listedJobs: listedJobsReducer
    },
});