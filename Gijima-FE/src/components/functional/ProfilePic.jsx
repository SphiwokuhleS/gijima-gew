import profilePic from "../../assets/profile.png";
export default function ProfilePic({rating}) {
    return (
    <div className="flex flex-col items-center">
        <img
            src={profilePic}
            height="50"
            width="50"
            className="rounded-full z-10 border"
            alt="profile pic"
        />
        <p className="bg-yellow text-xs rounded-md border border-black z-0  px-2 py-[1px] -mt-1">
            rated: {rating}/5
        </p>
    </div>


    )
}