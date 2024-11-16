import Tile from "../layout/Tile.jsx";
import moneyIcon from "../../assets/money.png";
import auctionIcon from "../../assets/auction.png";
import chevronIcon from "../../assets/chevron-right.svg";

export default function ProfileControllerTiles({open}) {
    return (
        <div className="p-2">
            <Tile classes="bg-gray-200">
                <h2 className="text-md font-medium">View Jobs</h2>
                <img
                    height="64"
                    width="64"
                    className="self-center"
                    src={moneyIcon}
                    alt="money icon" />
                <img
                    height="18"
                    width="18"
                    className="self-end mb-2"
                    src={chevronIcon}
                    alt="chevron icon" />
            </Tile>
            <Tile classes="bg-gray-200">
                <h2 className="text-md font-medium">Your bids</h2>
                <img
                    height="64"
                    width="64"
                    className="self-center"
                    src={auctionIcon}
                    alt="auction icon" />
                <img
                    height="18"
                    width="18"
                    className="self-end mb-2"
                    src={chevronIcon}
                    alt="chevron icon" />
            </Tile>
        </div>
    )
}