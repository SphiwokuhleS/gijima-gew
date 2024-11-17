export default function Button({text, ...props}) {
    return (
        <button
            className="bg-gray-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            {...props}>
            {text}
        </button>
    )
}