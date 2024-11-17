import Bid from "./Bid.jsx";

export default function BidList() {
    const bids = [
        {
            "id": 1,
            "user_id": 1,
            "accepted": true,
            "jobId": 1,
            "amount": 120,
            "jobTitle": "Tuck Shop Helper",
            "description": "I have experience organizing shops and can do it quickly.",
            "created_at": "2024-02-01T13:00:00Z"
        },
        {
            "id": 2,
            "user_id": 2,
            "accepted": false,
            "jobId": 3,
            "amount": 180,
            "jobTitle": "Painting a Shack",
            "description": "I can finish this within a day.",
            "created_at": "2024-02-02T16:00:00Z"
        },
        {
            "id": 3,
            "user_id": 3,
            "accepted": true,
            "jobId": 2,
            "amount": 60,
            "jobTitle": "Grass Cutting",
            "description": "I have my own tools and can start immediately.",
            "created_at": "2024-02-10T12:00:00Z"
        },
        {
            "id": 4,
            "user_id": 1,
            "accepted": false,
            "jobId": 4,
            "amount": 170,
            "jobTitle": "Fix Broken Window",
            "description": "I can complete this in a few hours.",
            "created_at": "2024-02-15T09:00:00Z"
        },
        {
            "id": 5,
            "user_id": 2,
            "accepted": false,
            "jobId": 5,
            "amount": 250,
            "jobTitle": "Sewing School Uniforms",
            "description": "I’ve sewn uniforms before and can deliver in 2 days.",
            "created_at": "2024-02-20T10:00:00Z"
        }
    ]


    return (
        <div className="px-2 lg:px-4">
            <div className="overflow-auto">
            </div>
            {bids.map((bid) => (
                <Bid key={'bid-' + bid.id} bid={bid} />
            ))}
        </div>
    )
}