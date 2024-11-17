import Tile from "./layout/Tile.jsx";
import { useNavigate } from 'react-router-dom';

export default function Bid({bid}) {
    const jobId = parseInt(bid.jobId);
    const navigate = useNavigate();
    function goToJobDetail(id) {
        navigate(`/job/${id}`);
    }
    return (
        <Tile classes="bg-gray-200" onClick={() => goToJobDetail(jobId)}>
            <h2 className="text-lg text-semibold">{bid.jobTitle}</h2>
            <p>{bid.description}</p>
            <p className="self-end text-bold">R{bid.amount}</p>
        </Tile>
    )
}