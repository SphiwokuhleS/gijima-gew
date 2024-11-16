import profilePic from "../../assets/profile.png";
export default function ProfilePic() {
    return (
    <img
        src={profilePic}
        height="50"
        width="50"
        className="rounded-full"
        alt="profile pic"
    />
    )
}