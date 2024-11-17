import { useSelector } from "react-redux";
import Tile from "./layout/Tile.jsx";
import {useNavigate, useParams} from "react-router-dom";
import CreateBid from "./CreateBid.jsx";
import Bid from "./Bid.jsx";
import chevron from "../assets/chevron-right.svg";

export default function Job() {
    const { id } = useParams();
    const navigate = useNavigate();
    const jobId = parseInt(id);

    const selectedJob = useSelector((state) =>
        state.listedJobs.jobs.find((job) => job.id === jobId)
    );

    function goBack() {
        navigate('/');
    }

    if (!selectedJob) {
        return <div>Job not found</div>;
    }

    return (
        <Tile classes="h-svh flex flex-col p-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">{selectedJob.title}</h1>
                    <p className="text-sm italic leading-7">{selectedJob.date}</p>
                </div>
                <img
                    onClick={goBack}
                    src={chevron}
                    alt="home icon"
                    className="rotate-180"
                    height="24"
                    width="24" />
            </div>
            <p className="my-4">{selectedJob.body}</p>
            <div className="mb-4">
                <p className="font-bold">R {selectedJob.price}</p>
            </div>
            {selectedJob.bid ?
                <Bid bid={selectedJob.bid} />:
                <CreateBid jobId={selectedJob.id}/>
            }
        </Tile>
    );
}
