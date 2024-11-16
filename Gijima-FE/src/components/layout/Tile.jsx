export default function Tile({classes = null, children}) {
    return (
        <div className={"flex flex-col rounded-md mb-4 p-2 drop-shadow-md " + classes}>
            {children}
        </div>
    )
}