import Job from "./Job.jsx";

export default function JobsList() {
    const jobs = [
        {
            "id": 1,
            "user_id": 1,
            "customer_id": 2,
            "date": "2024-02-01",
            "title": "Website Redesign",
            "body": "We need a complete overhaul of our website. The focus is on improving UX and updating the UI to reflect our new brand identity.",
            "status": "active",
            "price": 1500,
            "created_at": "2024-02-01T12:00:00Z"
        },
        {
            "id": 2,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Logo Design",
            "body": "Design a modern logo for a tech startup. The logo should reflect innovation and technology.",
            "status": "completed",
            "price": 750,
            "created_at": "2024-02-05T15:00:00Z"
        },
        {
            "id": 3,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Data Analysis for Marketing",
            "body": "We need a comprehensive data analysis to help guide our marketing efforts. This will include customer segmentation and predictive modeling.",
            "status": "active",
            "price": 2000,
            "created_at": "2024-02-10T11:00:00Z"
        },
        {
            "id": 1,
            "user_id": 1,
            "customer_id": 2,
            "date": "2024-02-01",
            "title": "Website Redesign",
            "body": "We need a complete overhaul of our website. The focus is on improving UX and updating the UI to reflect our new brand identity.",
            "status": "active",
            "price": 1500,
            "created_at": "2024-02-01T12:00:00Z"
        },
        {
            "id": 2,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Logo Design",
            "body": "Design a modern logo for a tech startup. The logo should reflect innovation and technology.",
            "status": "completed",
            "price": 750,
            "created_at": "2024-02-05T15:00:00Z"
        },
        {
            "id": 3,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Data Analysis for Marketing",
            "body": "We need a comprehensive data analysis to help guide our marketing efforts. This will include customer segmentation and predictive modeling.",
            "status": "active",
            "price": 2000,
            "created_at": "2024-02-10T11:00:00Z"
        },
        {
            "id": 1,
            "user_id": 1,
            "customer_id": 2,
            "date": "2024-02-01",
            "title": "Website Redesign",
            "body": "We need a complete overhaul of our website. The focus is on improving UX and updating the UI to reflect our new brand identity.",
            "status": "active",
            "price": 1500,
            "created_at": "2024-02-01T12:00:00Z"
        },
        {
            "id": 2,
            "user_id": 2,
            "customer_id": 3,
            "date": "2024-02-01",
            "title": "Logo Design",
            "body": "Design a modern logo for a tech startup. The logo should reflect innovation and technology.",
            "status": "completed",
            "price": 750,
            "created_at": "2024-02-05T15:00:00Z"
        },
        {
            "id": 3,
            "user_id": 3,
            "customer_id": 1,
            "date": "2024-02-01",
            "title": "Data Analysis for Marketing",
            "body": "We need a comprehensive data analysis to help guide our marketing efforts. This will include customer segmentation and predictive modeling.",
            "status": "active",
            "price": 2000,
            "created_at": "2024-02-10T11:00:00Z"
        }
    ]
    return (
        <div className="px-2 lg:px-4">
            <h1 className="font-bold text-xl mb-4">Jobs in your area:</h1>
            <div className="overflow-auto">
            </div>
            {jobs.map((job) => (
                <Job key={job.id} job={job} />
            ))}
        </div>
    )
}