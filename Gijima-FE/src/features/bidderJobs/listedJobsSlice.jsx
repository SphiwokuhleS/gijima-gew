import { createSlice } from '@reduxjs/toolkit';
import ListedJobModel from "./listedJobModel.jsx";


const initialState = {
    jobs: [
        {
            "id": 1,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Logo Design",
            "body": "Design a modern logo for a tech startup. The logo should reflect innovation and technology.",
            "status": "completed",
            "price": 750,
            "created_at": "2024-02-05T15:00:00Z",
            "bid": null,
            "bids": [],
        },
        {
            "id": 2,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Data Analysis for Marketing",
            "body": "We need a comprehensive data analysis to help guide our marketing efforts. This will include customer segmentation and predictive modeling.",
            "status": "active",
            "price": 2000,
            "created_at": "2024-02-10T11:00:00Z",
            "bid": null,
            "bids": [],
        },
        {
            "id": 3,
            "user_id": 1,
            "customer_id": 2,
            "date": "2024-02-01",
            "title": "Website Redesign",
            "body": "We need a complete overhaul of our website. The focus is on improving UX and updating the UI to reflect our new brand identity.",
            "status": "active",
            "price": 1500,
            "created_at": "2024-02-01T12:00:00Z",
            "bid": null,
            "bids": [],
        },
        {
            "id": 4,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Logo Design",
            "body": "Design a modern logo for a tech startup. The logo should reflect innovation and technology.",
            "status": "completed",
            "price": 750,
            "created_at": "2024-02-05T15:00:00Z",
            "bid": null,
            "bids": [],
        },
        {
            "id": 5,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Data Analysis for Marketing",
            "body": "We need a comprehensive data analysis to help guide our marketing efforts. This will include customer segmentation and predictive modeling.",
            "status": "active",
            "price": 2000,
            "created_at": "2024-02-10T11:00:00Z",
            "bid": null,
            "bids": [],
        },
       {
            "id": 6,
            "user_id": 1,
            "customer_id": 2,
            "date": "2024-02-01",
            "title": "Website Redesign",
            "body": "We need a complete overhaul of our website. The focus is on improving UX and updating the UI to reflect our new brand identity.",
            "status": "active",
            "price": 1500,
            "created_at": "2024-02-01T12:00:00Z",
            "bid": null,
            "bids": [],
        },
        {
            "id": 7,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Logo Design",
            "body": "Design a modern logo for a tech startup. The logo should reflect innovation and technology.",
            "status": "completed",
            "price": 750,
            "created_at": "2024-02-05T15:00:00Z",
            "bid": null,
            "bids": [],
        },
        {
            "id": 8,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Data Analysis for Marketing",
            "body": "We need a comprehensive data analysis to help guide our marketing efforts. This will include customer segmentation and predictive modeling.",
            "status": "active",
            "price": 2000,
            "created_at": "2024-02-10T11:00:00Z",
            "bid": null,
            "bids": [],
        }
    ],
};

const listedJobsSlice = createSlice({
    name: 'listedJobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload.map((job) => new ListedJobModel(job));
        },
        setBid: (state, action) => {
            const { jobId, bidAmount, bidDescription } = action.payload;
            const jobIndex = state.jobs.findIndex((job) => job.id === jobId);
            if (jobIndex !== -1) {
                state.jobs[jobIndex] = {
                    ...state.jobs[jobIndex],
                    bid: {
                        amount: bidAmount,
                        description: bidDescription,
                    },
                };
            }
        }
    },
});

export const { setBid, setJobs } = listedJobsSlice.actions;
export const listedJobsReducer = listedJobsSlice.reducer;