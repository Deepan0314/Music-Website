import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Play,
  Music2,
  Clock3,
  Disc3,
  TrendingUp,
  Headphones
} from "lucide-react";

import { Songslist } from "../Data/Song";
import { setPlayer } from "../Slice/Songs";
import { motion } from "framer-motion";

const Songlist = () => {

  const dispatch = useDispatch();

  const artistSongs = useSelector(
    (state) => state.ArtistList.artistSongs
  );

  const handleClick = (id) => {

    const currentSongIndex = Songslist.findIndex(
      (song) => song.id === id
    );

    if (currentSongIndex !== -1) {
      dispatch(setPlayer(currentSongIndex));
    }
  };

  const artistName =
    artistSongs.length > 0
      ? artistSongs[0].artist
      : "Unknown Artist";

  return (

    <div className="min-h-screen bg-black text-white p-4 md:p-6">

      {/* HERO SECTION */}
      <motion.div

        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5 }}

        className="
          relative
          overflow-hidden
          rounded-3xl
          p-8
          mb-8
          bg-gradient-to-br
          from-red-900/40
          via-black
          to-zinc-900
          border
          border-white/10
        "
      >

        {/* Glow */}
        <div
          className="
            absolute
            top-0
            right-0
            w-72
            h-72
            bg-red-500/20
            blur-3xl
            rounded-full
          "
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Content */}
          <div className="flex-1">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-red-500/20
                text-red-400
                text-sm
                font-medium
                mb-5
              "
            >
              <TrendingUp size={16} />
              Trending Artist Collection
            </div>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
                mb-4
              "
            >
              {artistName}
            </h1>

            <p
              className="
                text-white/60
                text-base
                md:text-lg
                max-w-2xl
                leading-relaxed
              "
            >
              Explore the complete collection of tracks,
              albums, and trending hits from {artistName}.
              Enjoy immersive music experience with modern
              streaming UI and smooth interactions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 mt-6">

              <div>
                <p className="text-2xl font-bold">
                  {artistSongs.length}
                </p>
                <p className="text-white/40 text-sm">
                  Songs
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  2.4B+
                </p>
                <p className="text-white/40 text-sm">
                  Streams
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  #1
                </p>
                <p className="text-white/40 text-sm">
                  Trending
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8">

              <button
                className="
                  flex
                  items-center
                  gap-2
                  bg-red-500
                  hover:bg-red-600
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                "
              >
                <Play size={18} fill="white" />
                Play Now
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  border
                  border-white/20
                  hover:border-white/40
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                "
              >
                <Headphones size={18} />
                Follow Artist
              </button>

            </div>

          </div>

          {/* Right Banner */}
          <motion.div

            animate={{
              rotate: [0, 5, -5, 0],
            }}

            transition={{
              duration: 6,
              repeat: Infinity,
            }}

            className="
              relative
              w-72
              h-72
              rounded-3xl
              bg-gradient-to-br
              from-red-500
              via-pink-500
              to-orange-500
              flex
              items-center
              justify-center
              shadow-2xl
              shadow-red-500/20
              flex-shrink-0
            "
          >

            <div
              className="
                absolute
                inset-4
                rounded-3xl
                border
                border-white/20
              "
            />

            <Disc3
              size={120}
              className="text-white/80"
            />

            <div
              className="
                absolute
                bottom-5
                left-5
              "
            >
              <p className="text-sm text-white/70">
                Featured Album
              </p>

              <h2 className="text-xl font-bold">
                Greatest Hits
              </h2>
            </div>

          </motion.div>

        </div>
      </motion.div>

      {/* SECTION TITLE */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <p className="text-red-400 text-sm font-medium mb-1">
            DISCOVER MUSIC
          </p>

          <h2 className="text-3xl font-bold">
            Popular Tracks
          </h2>

        </div>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-2
            text-white/40
            text-sm
          "
        >
          <Music2 size={16} />
          {artistSongs.length} Tracks Available
        </div>

      </div>

      {/* SONG LIST */}
      <div className="flex flex-col gap-3">

        {artistSongs.length === 0 && (

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-24
              text-white/40
            "
          >
            <Music2 size={60} />

            <p className="mt-5 text-xl font-medium">
              No Songs Available
            </p>
          </div>
        )}

        {artistSongs.map((song, index) => (

          <motion.div
            key={song.id}

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}

            whileHover={{
              scale: 1.01,
            }}

            whileTap={{
              scale: 0.98,
            }}

            onClick={() => handleClick(song.id)}

            className="
              group
              flex
              items-center
              justify-between
              gap-4
              bg-white/5
              hover:bg-white/10
              border
              border-white/10
              hover:border-red-500/40
              rounded-2xl
              p-4
              transition-all
              duration-300
              cursor-pointer
              backdrop-blur-md
            "
          >

            {/* LEFT */}
            <div className="flex items-center gap-4 min-w-0">

              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-red-500/20
                  flex
                  items-center
                  justify-center
                  group-hover:bg-red-500
                  transition-all
                "
              >
                <Play
                  size={18}
                  fill="currentColor"
                  className="
                    text-red-400
                    group-hover:text-white
                    ml-0.5
                  "
                />
              </div>

              <div className="min-w-0">

                <h2
                  className="
                    text-white
                    font-semibold
                    truncate
                    group-hover:text-red-400
                    transition-colors
                  "
                >
                  {song.title}
                </h2>

                <p className="text-sm text-white/50 truncate">
                  {song.artist}
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6 flex-shrink-0">

              <p className="hidden md:block text-white/40 text-sm">
                {song.album}
              </p>

              <div className="flex items-center gap-2 text-white/50 text-sm">

                <Clock3 size={14} />

                <span>{song.duration}</span>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Songlist;