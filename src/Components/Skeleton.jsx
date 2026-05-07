export function TitleSkeleton() {
    return (
        <div className="relative overflow-hidden animate-pulse bg-black rounded-2xl h-24  border border-white items-center flex gap-2 p-4">

            <div className="bg-gray-500 w-20 h-20 rounded-lg "></div>

            <div className="flex flex-col gap-3">
                <div className="bg-gray-400 w-40 h-4 rounded"></div>
                <div className="bg-gray-400 w-32 h-4 rounded"></div>
            </div>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 animate-pulse bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

        </div>
    )
}


export function RecentlyplayerSkeleton() {
    return (
        <div className="relative overflow-hidden flex flex-col bg-black rounded-2xl w-40 h-40 items-start gap-6 p-4">

            <div className="bg-gray-500 w-24 h-24 rounded-lg"></div>

            <div className="flex flex-col gap-3">
                <div className="bg-gray-400 w-32 h-4 rounded"></div>
                <div className="bg-gray-400 w-24 h-4 rounded"></div>
            </div>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

        </div>
    )
}