export default function ButtonRound({classes, onClick}) {
    return (
        <button onClick={onClick} className={`rounded-full w-12 h-12 text-white hover:shadow-lg ${classes}`}>
            <h2 className="text-4xl pb-2">+</h2>
        </button>
    )
}