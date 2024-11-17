export default function Input({classes, ...props}) {
    return (
        <input
            className={"border border-gray-300 p-2 " + classes}
            {...props}/>
    )
}