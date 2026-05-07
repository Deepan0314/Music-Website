import React, { useEffect } from 'react'
import Neelothi from '../assets/Songs/Neelothi.jpg'
import KadhalYenKadhal from '../assets/Songs/KadhalYenKadhal.jpg'
import Aura from '../assets/Songs/Aura.jpg'
import MaanaeMaanae from '../assets/Songs/MaanaeMaanae.jpg'
import Yaathae_Yaathae from '../assets/Songs/Yaathae_Yaathae.jpg'
import { MoveRight } from "lucide-react";
import { RecentlyplayerSkeleton } from './Skeleton'
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setPlayer } from '../Slice/Songs'
import { Songslist } from "../Data/Song";
const RecentSongs = Songslist;
const RecentlyPlayed = () => {

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, (1000));
    return () => clearTimeout(timer);
  }, [])

  function handleClick(id) {
    const index = Songslist.findIndex((song) => {
      return song.id == id
    })
    dispatch(setPlayer(e))
  };
  return (
    <>
      <div className="font-serif font-semibold text-white px-8 mt-8 mb-1 w-full h-fit overflow-x-scroll no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">


        </div>

        {/* Song Cards */}
        {isLoading ? <div className='flex justify-baseline gap-4 pb-4'> {Array(3).fill(0).map((_, i) => (<RecentlyplayerSkeleton key={i} />))}</div> :
          <div className="flex gap-6   pb-4">


            {RecentSongs.slice(0, 5).map((songs, i) => (
              <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                key={songs.id}
                onClick={() => handleClick(songs.id)}
                className="w-40 shrink-0 hover:scale-105  transform-gpu transition-transform duration-300"
              >
                <img
                  src={songs.artwork}
                  alt={songs.album}
                  loading='lazy'
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="mt-2 ">
                  <h3 className="text-sm font-bold">{songs.title}</h3>
                  <p className="text-xs text-gray-400">{songs.album}</p>
                </div>
              </motion.div>
            )

            )

            }

          </div>
        }
      </div>

    </>
  )
}

export default RecentlyPlayed