import {useState} from "react";


export default function HomePage() {
    const [user, setUser] = useState({
        "id": 1,
        "username": "john_doe",
        "stars": 4,
        "prefered_work": "Web Development",
        "created_at": "2024-01-10T10:00:00Z"
    }, [])
    return (
        <div>
            <h1>{user.username}</h1>
            <h2>Rating: {user.stars}/5</h2>
            <h2>Prefered Work: {user.prefered_work}</h2>
        </div>
    )
}