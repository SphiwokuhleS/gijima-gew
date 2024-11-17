import { createSlice } from '@reduxjs/toolkit';
import ListedJobModel from "./listedJobModel.jsx";


const initialState = {
    jobs: [
        {
            "id": 1,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Tuck Shop Helper",
            "body": "Help stock and organize a tuck shop. Duties include arranging shelves and assisting with sales during busy times.",
            "status": "completed",
            "price": 100,
            "created_at": "2024-02-05T15:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 2,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Grass Cutting",
            "body": "Need someone to cut the grass and tidy up the yard. Bring your own tools if possible.",
            "status": "active",
            "price": 50,
            "created_at": "2024-02-10T11:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 3,
            "user_id": 1,
            "customer_id": 2,
            "date": "2024-02-01",
            "title": "Painting a Shack",
            "body": "Paint the outside of a shack. Paint and brushes provided.",
            "status": "active",
            "price": 200,
            "created_at": "2024-02-01T12:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 4,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Fix Broken Window",
            "body": "Replace a broken window pane in a small house. Materials provided.",
            "status": "completed",
            "price": 150,
            "created_at": "2024-02-05T15:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 5,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Sewing School Uniforms",
            "body": "Looking for someone to sew two school uniforms. Materials will be supplied.",
            "status": "active",
            "price": 300,
            "created_at": "2024-02-10T11:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 6,
            "user_id": 1,
            "customer_id": 2,
            "date": "2024-02-01",
            "title": "Car Wash Service",
            "body": "Wash and clean the interior of a taxi. Supplies provided.",
            "status": "active",
            "price": 80,
            "created_at": "2024-02-01T12:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 7,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Babysitting",
            "body": "Watch over two kids for an afternoon while the mother runs errands.",
            "status": "completed",
            "price": 120,
            "created_at": "2024-02-05T15:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 8,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Cooking for a Funeral",
            "body": "Assist with cooking and serving food for a family funeral. Ingredients and cooking utensils provided.",
            "status": "active",
            "price": 250,
            "created_at": "2024-02-10T11:00:00Z",
            "bid": null,
            "bids": []
        },
        {
            "id": 9,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-11-17",
            "title": "Repairing a Fence",
            "body": "Fix a wooden fence around a yard. Materials will be provided, but bring your own tools.",
            "status": "active",
            "price": 180,
            "created_at": "2024-02-10T11:00:00Z",
            "bid": null,
            "bids": []
        },
        // {
        //     "id": 10,
        //     "user_id": 1,
        //     "customer_id": 2,
        //     "date": "2024-11-17",
        //     "title": "Demo title",
        //     "body": "demo description.",
        //     "status": "active",
        //     "price": 100,
        //     "created_at": "2024-02-01T12:00:00Z",
        //     "bid": null,
        //     "bids": []
        // }
    ],
};

const listedJobsSlice = createSlice({
    name: 'listedJobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload.map((job) => new ListedJobModel(job));
        },
        addJob: (state, action) => {
            // Return a new state with the new job added to the jobs array
            const job = {
                id: state.jobs.length + 1,
                bid: null,
                bids: [],
                ...action.payload,
            }
            state.jobs = [...state.jobs, job];
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

export const { setBid, setJobs, addJob } = listedJobsSlice.actions;
export const listedJobsReducer = listedJobsSlice.reducer;