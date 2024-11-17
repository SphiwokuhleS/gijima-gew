import Job from "./JobTile.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setJobs} from "../features/bidderJobs/listedJobsSlice.jsx";

export default function JobsList() {
    // const jobs = make call to api to get jobs
    const dispatch = useDispatch();
    const listedJobs = useSelector((state) => state.listedJobs.jobs);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("/api/jobs");
                const jobs = await response.json();
                dispatch(setJobs(jobs));
            } catch (error) {
                console.error("Failed to fetch jobs:", error);
            }
        };

        fetchJobs();
    }, [dispatch]);

    return (
        <div className="px-2 lg:px-4">
            <div className="overflow-auto">
            </div>
            {listedJobs.map((job) => (
                <Job key={'job-' + job.id} job={job} />
            ))}
        </div>
    )
}