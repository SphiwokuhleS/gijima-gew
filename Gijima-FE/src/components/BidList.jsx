import Bid from "./Bid.jsx";

export default function BidList() {
    const bids = [{
            "id": 1,
            "user_id": 1,
            "accepted": true,
            "jobId": 1,
            "amount": 1500,
            "job_title": "Logo Design",
            "description": "Good job!",
            "created_at": "2024-02-01T13:00:00Z"
        },
        {
            "id": 2,
            "user_id": 2,
            "accepted": false,
            "jobId": 3,
            "amount": 800,
            "job_title": "Data Analysis for Marketing",
            "description": "I can do it for less",
            "created_at": "2024-02-02T16:00:00Z"
        },
        {
            "id": 3,
            "user_id": 3,
            "accepted": true,
            "jobId": 2,
            "amount": 2000,
            "job_title": "Data Analysis for Marketing",
            "description": "I can start immediately",
            "created_at": "2024-02-10T12:00:00Z"
        },
        {
            "id": 4,
            "user_id": 1,
            "accepted": false,
            "jobId": 4,
            "amount": 500,
            "job_title": "Logo Design",
            "description": "I can do it in 2 days",
            "created_at": "2024-02-15T09:00:00Z"
        },
        {
            "id": 5,
            "user_id": 2,
            "accepted": false,
            "jobId": 5,
            "amount": 1000,
            "job_title": "Data Analysis for Marketing",
            "description": "I can do it in 3 days",
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