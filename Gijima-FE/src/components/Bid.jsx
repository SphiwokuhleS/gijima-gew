import Button from "./functional/Button.jsx";

export default function Bid({bid}) {
    return (
        <div>
            <h1>Bid Number {bid.id}</h1>
            <p>{bid.note}</p>
            <Button />
            <p>{bid.price}</p>
        </div>
    )
}