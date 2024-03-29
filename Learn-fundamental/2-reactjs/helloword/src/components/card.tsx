type data = {
    title: String
    description: string,
    image: string
}

export function Card(props: data) {
    return (
        <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg bg-white p-4 max-h-fit">
            <img className="w-full" src={props.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-slate-700">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}