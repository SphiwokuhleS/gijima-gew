import Job from "./Job.jsx";
import {useSelector} from "react-redux";

export default function JobsList() {
    const listedJobs = useSelector((state) => state.listedJobs.jobs);

    return (
        <div className="px-2 lg:px-4">
            <h1 className="font-bold text-xl mb-4">Jobs in your area:</h1>
            <div className="overflow-auto">
            </div>
            {listedJobs.map((job) => (
                <Job key={job.id} job={job} />
            ))}
        </div>
    )
}