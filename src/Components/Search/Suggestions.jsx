import React from 'react'

const Suggestions = ({
    showSuggestions,
    songSuggestions,
    artistSuggestions,
    activeIdx,
    selectSuggestion,
}) => {

    if(!showSuggestions)return null;
    return (
        <>
            {showSuggestions && (
                <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#14141e] border border-[#2a2a3e] rounded-xl overflow-hidden z-50 shadow-2xl">
                    {songSuggestions.length > 0 && (
                        <>
                            <p className="text-[#555] text-[11px] font-bold tracking-widest uppercase px-4 pt-3 pb-1 font-syne">
                                Songs
                            </p>
                            {songSuggestions.map((s, i) => (
                                <div
                                    key={"ss" + s.id}
                                    className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${activeIdx === i ? "bg-[#1c1c2e]" : "hover:bg-[#1c1c2e]"
                                        }`}
                                    onMouseDown={() => selectSuggestion(s)}
                                >
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                                        style={{ background: s.bg }}
                                    >
                                        {<img src={s.artwork} alt={s.title} className="w-8 h-8" />}

                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{s.title}</p>
                                        <p className="text-xs text-[#666]">{s.artist}</p>
                                    </div>
                                    <span className="text-[#444] text-xs">↗</span>
                                </div>
                            ))}
                        </>
                    )}

                    {artistSuggestions.length > 0 && (
                        <>
                            <div className="h-px bg-[#2a2a3e] my-1" />
                            <p className="text-[#555] text-[11px] font-bold tracking-widest uppercase px-4 pt-2 pb-1 font-syne">
                                Artists
                            </p>
                            {artistSuggestions.map((a, i) => (
                                <div
                                    key={"sa" + a.id}
                                    className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${activeIdx === songSuggestions.length + i
                                        ? "bg-[#1c1c2e]"
                                        : "hover:bg-[#1c1c2e]"
                                        }`}
                                    onMouseDown={() => selectSuggestion(a)}
                                >
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0"
                                        style={{ background: a.bg }}
                                    >
                                        {a.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{a.name}</p>
                                        <p className="text-xs text-[#666]">
                                            Artist · {a.followers} followers
                                        </p>
                                    </div>
                                    <span className="text-[#444] text-xs">↗</span>
                                </div>
                            ))}
                        </>
                    )}
                    <div className="h-2" />
                </div>
            )}
        </>
    )
}

export default Suggestions