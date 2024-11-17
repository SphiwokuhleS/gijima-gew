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
            <h2>Bid Number {bid.id}</h2>
            <p>{bid.note}</p>
            <p>{bid.price}</p>
        </Tile>
    )
}