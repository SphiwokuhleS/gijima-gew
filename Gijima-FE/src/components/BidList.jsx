import Bid from "./Bid.jsx";

export default function BidList() {
    const bids = [{
            "id": 1,
            "user_id": 1,
            "accepted": true,
            "jobId": 1,
            "price": 1500,
            "note": "Good job!",
            "created_at": "2024-02-01T13:00:00Z"
        },
        {
            "id": 2,
            "user_id": 2,
            "accepted": false,
            "jobId": 3,
            "price": 800,
            "Note": "I can do it for less",
            "created_at": "2024-02-02T16:00:00Z"
        },
        {
            "id": 3,
            "user_id": 3,
            "accepted": true,
            "jobId": 2,
            "price": 2000,
            "note": "I can start immediately",
            "created_at": "2024-02-10T12:00:00Z"
        }]

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