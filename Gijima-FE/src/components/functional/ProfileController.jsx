import Tile from "../layout/Tile.jsx";
import moneyIcon from "../../assets/money.png";
import auctionIcon from "../../assets/auction.png";
import chevronIcon from "../../assets/chevron-right.svg";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

export default function ProfileController({isOpen = false, changeLayout}) {
    const navigate = useNavigate()
    function redirectToCreateJob() {
        navigate('/job/create')
    }
    return (
        <div className="px-2 py-4">
            {!isOpen ?
            <div className="flex" onClick={() => changeLayout('tiles')}>
                <div>
                    <img
                        src={chevronIcon}
                        alt="chevron icon"
                        height="18"
                        width="18"
                        className="self-end rotate-180" />
                    <p className="text-sm">back</p>
                </div>
            </div>:
                <>
                    <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>
                    <Tile
                        classes="bg-gray-200"
                        onClick={() => changeLayout('jobs')}>
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
                    <Tile
                        classes="bg-gray-200"
                        onClick={() => changeLayout('bids')}>
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
                    <Button
                        text="Create Job"
                        onClick={redirectToCreateJob}
                    />
                </>
            }
        </div>
    )
}