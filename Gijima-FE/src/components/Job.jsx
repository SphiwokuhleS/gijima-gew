import { useDispatch, useSelector } from "react-redux";
import Tile from "./layout/Tile.jsx";
import { useParams } from "react-router-dom";
import CreateBid from "./CreateBid.jsx";

export default function Job() {
    const { id } = useParams();
    const jobId = parseInt(id);

    // Use the jobId to select the job from the Redux store
    const selectedJob = useSelector((state) =>
        state.listedJobs.jobs.find((job) => job.id === jobId)
    );

    if (!selectedJob) {
        return <div>Job not found</div>;
    }

    return (
        <Tile classes="h-svh flex flex-col p-4">
            <div>
                <h1 className="text-2xl font-bold">{selectedJob.title}</h1>
                <p className="text-sm italic leading-7">{selectedJob.date}</p>
            </div>
            <p className="my-4">{selectedJob.body}</p>
            <div className="mb-4">
                <p className="font-bold">R {selectedJob.price}</p>
            </div>
            <CreateBid />
        </Tile>
    );
}
