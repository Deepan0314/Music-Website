import React from 'react'

const Searchbar = ({
    query,
    setQuery,
    focused,
    setFocused,
    setActiveIdx,
    handleKey,
    inputRef
}) => {
    return (
        <div
            className={`flex items-center gap-3 bg-[#14141e] border rounded-2xl px-4 py-3 transition-colors ${focused ? "border-[#c8f25c]" : "border-[#2a2a3e]"
                }`}
        >
            <Search size={18} />

            <input
                ref={inputRef}
                type="text"
                placeholder="Search songs, artists, albums..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIdx(-1);
                }}
                onFocus={() => setFocused(true)}
                onKeyDown={handleKey}
                className="flex-1  bg-transparent border-none outline-none text-white placeholder-[#444] text-base"
            />
            {query && (
                <button
                    onClick={() => {
                        setQuery("");
                        inputRef.current.focus();
                    }}
                    className="text-[#555] hover:text-[#999] transition-colors"
                >

                </button>
            )}
        </div>
    )
}

export default Searchbar