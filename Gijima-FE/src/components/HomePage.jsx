import {useState} from "react";
import ProfilePic from "./functional/ProfilePic.jsx";
import star from "../assets/star.svg";
import JobsList from "./JobsList.jsx";
import BidList from "./BidList.jsx";

export default function HomePage() {
    const [user, setUser] = useState({
        "id": 1,
        "username": "Montho Nyembe",
        "stars": 4,
        "prefered_work": "Web Development",
        "created_at": "2024-01-10T10:00:00Z"
    }, [])
    return (
        <div className="flex flex-col items-center h-svh">
            <div className="rounded-b-3xl bg-gray-700 w-full py-4 flex flex-col items-center">
                <p className="text-white text-sm mb-4">Your Profile</p>
                <ProfilePic />
                <h1 className="mt-4 text-2xl text-white">{user.username}</h1>
                <p className="text-white text-sm mb-4">{user.prefered_work}</p>
            </div>
            <div className="-mt-8 bg-white w-5/6 rounded-t-3xl drop-shadow-lg overflow-auto">
                <div className="flex">
                    {Array.from({ length: user.stars }, (_, index) => (
                        <img width="24" height="24" src={star} alt="rating" className="color-white" />
                    ))}
                </div>
                <div className="flex my-2">
                    <div className="w-1/2">Jobs</div>
                    <div className="w-1/2">Bids</div>
                </div>
                <JobsList />
                <BidList />
            </div>
        </div>
    )
}