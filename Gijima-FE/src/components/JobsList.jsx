import Job from "./Job.jsx";
import {useSelector} from "react-redux";

export default function JobsList() {
    const listedJobs = useSelector((state) => state.listedJobs.jobs);

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