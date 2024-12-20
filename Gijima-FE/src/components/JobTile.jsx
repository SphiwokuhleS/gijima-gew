import completeIcon from '../assets/icons8-complete.svg';
import pendingIcon from '../assets/icons8-pending.svg';
import Tile from "./layout/Tile.jsx";
import { useNavigate } from 'react-router-dom';

export default function ({job}) {
    const navigate = useNavigate();
    function goToJobDetail(id) {
        navigate(`/job/${id}`);
    }
    return (
        <Tile classes="bg-gray-200" onClick={() => goToJobDetail(job.id)}>
            <div className="flex justify-between">
                <h1 className="text-lg font-bold">{job.title}</h1>
                <p className="text-sm italic leading-7">{job.date}</p>
            </div>
            <p className="truncate my-4">{job.body}</p>
            <div className="flex justify-between">
                {job.status === "active" ?
                    <img width="25" height="25" src={completeIcon} alt="Job Complete" />
                    : <img width="25" height="25" src={pendingIcon} alt="Job Pending" />
                }
                <p className="font-bold">R {job.price}</p>
            </div>
        </Tile>
    )
}