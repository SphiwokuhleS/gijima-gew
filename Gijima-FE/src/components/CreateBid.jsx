import Button from "./functional/Button.jsx";
import Input from "./functional/Input.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setBid} from "../features/bidderJobs/listedJobsSlice.jsx";

export default function CreateBid({jobId}) {
    const [bidAmount, setBidAmount] = useState(null);
    const [bidDescription, setBidDescription] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            dispatch(setBid({ jobId, bidAmount, bidDescription }));
            // navigate('/job');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2 className="text-2xl mb-4">Create a Bid</h2>

                <Input
                    classes="mb-4"
                    type="text"
                    placeholder="Enter your amount"
                    onChange={(e) => setBidAmount(e.target.value)}
                />
                <Input
                    classes="mb-4"
                    type="text"
                    placeholder="Enter your note"
                    onChange={(e) => setBidDescription(e.target.value)}
                />
                <Button text="Bid on this job" type="submit"/>
            </div>
        </form>
    )
}
