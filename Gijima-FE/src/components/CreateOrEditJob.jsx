import Input from "./functional/Input.jsx";
import Button from "./functional/Button.jsx";

export default function CreateOrEditJob() {
    return (
        <div className="flex flex-col justify-items-center h-full">
            <div className="flex flex-col align-center rounded-md bg-grey-300 p-8">
                <h1 className="text-4xl self-center mb-4">Create Job</h1>
                <Input classes="mb-4"/>
                <Input classes="mb-4"/>
                <Input classes="mb-4"/>
                <Input classes="mb-4"/>
                <Button />
            </div>
        </div>
    )
}