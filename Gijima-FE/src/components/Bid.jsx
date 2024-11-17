import Tile from "./layout/Tile.jsx";
import { useNavigate } from 'react-router-dom';

export default function Bid({bid}) {
    console.log(bid)
    const jobId = parseInt(bid.jobId);
    const navigate = useNavigate();
    function goToJobDetail(id) {
        navigate(`/job/${id}`);
    }
    return (
        <Tile classes="bg-gray-200" onClick={() => goToJobDetail(jobId)}>
            <h2 className="text-lg text-semibold">Bid Number {bid.id}</h2>
            <p>{bid.description}</p>
            <p>R{bid.amount}</p>
        </Tile>
    )
}