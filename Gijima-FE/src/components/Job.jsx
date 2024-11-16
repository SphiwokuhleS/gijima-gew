import completeIcon from '../assets/icons8-complete.svg';
import pendingIcon from '../assets/icons8-pending.svg';

export default function ({job}) {
    return (
        <div className="flex flex-col bg-gray-200 rounded-md mb-4 p-2 drop-shadow-sm">
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
        </div>
    )
}