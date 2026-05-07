
import { useState, useRef, useEffect } from "react";
import { Songslist } from '../Data/Song.js'
import { Artist } from "../Data/Artist.js";
import { Search } from "lucide-react";
import '../Components/Styles/Search.css'
import Suggestions from "../Components/Search/Suggestions.jsx";
import Searchbar from "../Components/Search/Searchbar.jsx";
import { useDispatch } from "react-redux";
const SONGS = Songslist;

const ARTISTS = Artist;

const ALBUMS = [
  { id: 1, name: "After Hours", artist: "The Weeknd", cover: "🌃", bg: "#1a1040", year: 2020 },
  { id: 2, name: "Future Nostalgia", artist: "Dua Lipa", cover: "✨", bg: "#0d2040", year: 2020 },
  { id: 3, name: "SOUR", artist: "Olivia Rodrigo", cover: "💛", bg: "#2d2d00", year: 2021 },
  { id: 4, name: "Harry's House", artist: "Harry Styles", cover: "🏡", bg: "#001a10", year: 2022 },
];

function Equalizer() {
  return (
    <div className="flex items-end gap-[2px] h-4">
      <div
        className="w-[3px] bg-[#c8f25c] rounded-sm"
        style={{ animation: "eq 0.6s ease-in-out infinite alternate" }}
      />
      <div
        className="w-[3px] bg-[#c8f25c] rounded-sm"
        style={{ animation: "eq 0.5s ease-in-out 0.1s infinite alternate" }}
      />
      <div
        className="w-[3px] bg-[#c8f25c] rounded-sm"
        style={{ animation: "eq 0.7s ease-in-out 0.2s infinite alternate" }}
      />
    </div>
  );
}

export default function SearchSongs() {

  const dispatch= useDispatch();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeTab, setActiveTab] = useState("songs");
  const [playingId, setPlayingId] = useState(null);
  const [likes, setLikes] = useState({ 3: true, 6: true });
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  const q = query.toLowerCase().trim();

  const filteredSongs = q
    ? SONGS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q)

    )
    : [];

  const filteredArtists = q
    ? ARTISTS.filter((a) => a.title.toLowerCase().includes(q))
    : [];
  const filteredAlbums = q
    ? ALBUMS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.artist.toLowerCase().includes(q)
    )
    : [];

  const songSuggestions = filteredSongs.slice(0, 3);
  const artistSuggestions = filteredArtists.slice(0, 2);
  const suggestions = [
    ...songSuggestions.map((s) => ({ type: "song", ...s })),
    ...artistSuggestions.map((a) => ({ type: "artist", ...a })),
  ].slice(0, 5);

  const showSuggestions = focused && suggestions.length > 0;
  const hasResults =
    q && (filteredSongs.length || filteredArtists.length || filteredAlbums.length);
  const totalResults =
    filteredSongs.length + filteredArtists.length + filteredAlbums.length;

  // Close Dropdown
  useEffect(() => {
    function handle(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target))
        setFocused(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function handleKey(e) {
    if (!showSuggestions) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      selectSuggestion(suggestions[activeIdx]);
    } else if (e.key === "Escape") {
      setFocused(false);
    }
  }

  function selectSuggestion(s) {
    setQuery(s.name);
    setFocused(false);
    setActiveIdx(-1);
  }

  return (
    <div className="min-h-screen search bg-[#0a0a0f] text-white rounded  font-sans ">


      {/* Header */}
      <div className="text-center pt-10 mb-10 ">
        <p className="font-syne text-sm font-semibold tracking-widest text-[#c8f25c] uppercase opacity-80 mb-4">
          ♪ Wavelength
        </p>
        <h1 className="font-sans text-5xl font-extrabold leading-tight mb-2">
          Find your next{" "}
          <span className="text-[#c8f25c]">favorite song</span>
        </h1>
        <p className="text-[#888] text-sm font-light">
          Search millions of tracks, artists, and albums
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-10 relative" ref={wrapRef}>
        {/** Search Bar */}

        <Searchbar
          query={query}
          setQuery={setQuery}
          focused={focused}
          setFocused={setFocused}
          setActiveIdx={setActiveIdx}
          handleKey={handleKey}
          inputRef={inputRef} />

        {/* Suggestions Dropdown */}
        <Suggestions
          showSuggestions={showSuggestions}
          songSuggestions={songSuggestions}
          artistSuggestions={artistSuggestions}
          activeIdx={activeIdx}
          selectSuggestion={selectSuggestion}
        />
      </div>

      {/* Results */}
      {hasResults ? (
        <div className="max-w-xl mx-auto fade-in">
          <div className="flex items-center justify-between mb-4">
            <span className="font-syne font-bold text-[#ccc] text-sm">
              Results for "{query}"
            </span>
            <span className="text-[#555] text-xs font-light">
              {totalResults} found
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {["songs", "artists", "albums"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-1.5 rounded-lg text-[13px] font-medium border transition-all ${activeTab === t
                  ? "bg-[#c8f25c] text-[#0a0a0f] border-[#c8f25c]"
                  : "bg-[#14141e] text-[#888] border-[#2a2a3e] hover:border-[#444] hover:text-[#ccc]"
                  }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)} (
                {t === "songs"
                  ? filteredSongs.length
                  : t === "artists"
                    ? filteredArtists.length
                    : filteredAlbums.length}
                )
              </button>
            ))}
          </div>

          {/* Songs Tab */}
          {activeTab === "songs" &&
            (filteredSongs.length > 0 ? (
              filteredSongs.map((s) => (
                <div
                  key={s.id}
                  onClick={() =>
                  {
                    const index=s.findIndex()
                    setPlayingId((id) => (id === s.id ? null : s.id))
                  }
                  }
                  className={`track-bar flex items-center gap-3 p-3 bg-[#14141e] border rounded-xl mb-2 cursor-pointer transition-all relative overflow-hidden ${playingId === s.id
                    ? "playing border-[#2a2a40]"
                    : "border-[#2a2a3e] hover:bg-[#1c1c2e] hover:border-[#2e2e45]"
                    }`}
                >
                  {/* Album Art */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0 relative"
                    style={{ background: s.bg }}
                  >
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={s.artwork}
                        alt={s.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center transition-opacity ${playingId === s.id ? "opacity-100" : "opacity-0 hover:opacity-100"
                        }`}
                    >
                      {playingId === s.id ? (
                        <Equalizer />
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${playingId === s.id ? "text-[#c8f25c]" : "text-white"
                        }`}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs text-[#666] mt-0.5">
                      {s.artist} · {s.album}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-4 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLikes((l) => ({ ...l, [s.id]: !l[s.id] }));
                      }}
                      className={`text-base transition-colors ${likes[s.id]
                        ? "text-[#e25c7c]"
                        : "text-[#444] hover:text-[#e25c7c]"
                        }`}
                    >
                      {likes[s.id] ? "♥" : "♡"}
                    </button>
                    <span className="text-xs text-[#555]">{s.duration}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-[#555] py-12">No songs found</p>
            ))}

          {/* Artists Tab */}
          {activeTab === "artists" &&
            (filteredArtists.length > 0 ? (
              filteredArtists.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center gap-3 p-3 bg-[#14141e] border border-[#2a2a3e] rounded-xl mb-2 cursor-pointer hover:bg-[#1c1c2e] hover:border-[#2e2e45] transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0"
                    style={{ background: a.bg }}
                  >
                    {a.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {a.name}
                      {a.verified && (
                        <span
                          className="inline-flex items-center justify-center w-3.5 h-3.5 bg-[#7c5cfc] rounded-full ml-1 align-middle"
                          title="Verified"
                        >
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <polyline
                              points="2,5 4,7 8,3"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-[#666] mt-0.5">
                      {a.followers} monthly listeners
                    </p>
                  </div>
                  <button className="bg-transparent border border-[#2a2a3e] rounded-full px-4 py-1 text-[#aaa] text-xs hover:border-[#444] hover:text-white transition-all">
                    Follow
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-[#555] py-12">No artists found</p>
            ))}

          {/* Albums Tab */}
          {activeTab === "albums" &&
            (filteredAlbums.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {filteredAlbums.map((a) => (
                  <div
                    key={a.id}
                    className="bg-[#14141e] border border-[#2a2a3e] rounded-xl p-3 cursor-pointer hover:bg-[#1c1c2e] hover:border-[#2e2e45] transition-all"
                  >
                    <div
                      className="w-full aspect-square rounded-lg flex items-center justify-center text-4xl mb-3"
                      style={{ background: a.bg }}
                    >
                      {a.cover}
                    </div>
                    <p className="text-sm font-medium truncate">{a.name}</p>
                    <p className="text-xs text-[#555] mt-0.5">
                      {a.artist} · {a.year}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-[#555] py-12">No albums found</p>
            ))}
        </div>
      ) : (
        q && (
          <div className="text-center py-16 fade-in">
            <p className="text-5xl opacity-40 mb-4">
              <Search size={30} className="ml-75" />
            </p>
            <p className="font-syne font-bold text-[#555] text-base">
              Nothing found for "{query}"
            </p>
            <p className="text-xs text-[#3a3a3a] mt-1">
              Try a different search term
            </p>
          </div>
        )
      )}
    </div>
  );
}
