import {useState} from "react";
import ProfilePic from "./functional/ProfilePic.jsx";
import JobsList from "./JobsList.jsx";
import BidList from "./BidList.jsx";
import ProfileController from "./functional/ProfileController.jsx";

export default function HomePage() {
    const [layout, setLayout] = useState('tiles')
    const [user, setUser] = useState({
        "id": 1,
        "username": "Montho Nyembe",
        "stars": 4,
        "prefered_work": "Web Development",
        "created_at": "2024-01-10T10:00:00Z"
    }, [])

    function handleLayoutChange(layout) {
        setLayout(layout)
    }

    let mode;
    switch (layout) {
        case 'jobs':
            mode = <JobsList />
            break;
        case 'bids':
            mode = <BidList />
            break;
    }

    return (
        <div className="flex flex-col items-center h-svh">
            <div className="rounded-b-3xl bg-gray-700 w-full pt-4 pb-8 flex flex-col items-center">
                <ProfilePic rating={user.stars}/>
                <h1 className="mt-4 text-2xl text-white">{user.username}</h1>
                <p className="text-white text-sm mb-4">{user.prefered_work}</p>
            </div>
            <div className="-mt-8 bg-white w-5/6 rounded-3xl drop-shadow-lg overflow-auto scroll-smooth">
                <ProfileController
                    isOpen={layout == 'tiles'}
                    changeLayout={handleLayoutChange}
                />
                {mode}
            </div>
        </div>
    )
}