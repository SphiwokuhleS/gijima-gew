import Button from "./functional/Button.jsx";
import Input from "./functional/Input.jsx";

export default function CreateBid({jobId}) {
    return (
        <div>
            <h2 className="text-2xl mb-4">Create a Bid</h2>
            <form className="flex flex-col">
                <Input
                    classes="mb-4"
                    type="text"
                    placeholder="Enter your amount"
                />
                <Input
                    classes="mb-4"
                    type="text"
                    placeholder="Enter your note"
                />
                <Button text="Bid on this job" />
            </form>
        </div>
    )
}