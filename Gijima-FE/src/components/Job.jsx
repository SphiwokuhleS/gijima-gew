import Tile from "./layout/Tile.jsx";

export default function Job({job}) {
    return (
        <Tile classes="bg-gray-200">
            <div className="flex justify-between">
                <h1 className="text-lg font-bold">{job.title}</h1>
                <p className="text-sm italic leading-7">{job.date}</p>
            </div>
            <p className="truncate my-4">{job.body}</p>
            <div className="flex justify-between">
                <p className="font-bold">R {job.price}</p>
            </div>
        </Tile>
    )
}