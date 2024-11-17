import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./functional/Input.jsx";
import Button from "./functional/Button.jsx";
import { addJob } from "../features/bidderJobs/listedJobsSlice.jsx";
import {useNavigate} from "react-router-dom"; // Make sure the path is correct

export default function CreateOrEditJob({ jobId }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Local state for form data
    const [formData, setFormData] = useState({
        date: "",
        title: "",
        body: "",
        price: "",
    });

    // Prefill form data if editing an existing job
    useEffect(() => {
        if (jobId) {
            // Fetch the job from the Redux store if editing
            // Ideally, we should use `useSelector` to get the job data from the store
            // and prefill the form data
            const job = state.listedJobs.jobs.find((job) => job.id === jobId);
            if (job) {
                setFormData({
                    date: job.date,
                    title: job.title,
                    body: job.body,
                    price: job.price,
                });
            }
        }
    }, [jobId]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newJob = {
            ...formData,
            user_id: 1, // Example user_id
            customer_id: 2, // Example customer_id
            status: "active", // Default status
            created_at: new Date().toISOString(),
        };

        dispatch(addJob(newJob));
        navigate("/");
    };

    return (
        <div className="flex flex-col justify-items-center h-full">
            <div className="flex flex-col align-center rounded-md bg-grey-300 p-8">
                <h1 className="text-4xl self-center mb-4">
                    {jobId ? "Edit Job" : "Create Job"}
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <Input
                        classes="mb-4"
                        type="date"
                        placeholder="Date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <Input
                        classes="mb-4"
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <Input
                        classes="mb-4"
                        type="text"
                        placeholder="Description"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                    <Input
                        classes="mb-4"
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <Button text={jobId ? "Update Job" : "Create Job"} type="submit" />
                </form>
            </div>
        </div>
    );
}
