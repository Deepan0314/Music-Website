import React from 'react'
import Kuththu from '../assets/Kuththu.jpg'

import cd from '../assets/CD.jpg'
import { easeOut, motion, useAnimation } from 'framer-motion'
import { Play, Heart, StepForward, StepBack, Pause } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useAudioplayer } from '../Hooks/useAudioplayer';
import { useDispatch, useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { nextSong, prevSong } from '../Slice/Songs';






export const SongCard = () => {
    const dispatch = useDispatch();

    const { playlist, currentIndex } = useSelector((state) => state.songList);
    const currentSong = playlist[currentIndex];
    const controls = useAnimation();
    const { isPlaying, setIsPlaying, togglePlay, setCurrentsong, formatTime, duration, progress, seek } = useAudioplayer();

    console.log(currentSong);
    console.log(currentIndex);
    //SetCD logo


    useEffect(() => {
        if (isPlaying) {

            controls.start({

                rotate: 360,
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }
            })
        }
        else {

            controls.stop();
        }


    }, [isPlaying]);

    useEffect(() => {
        if (currentSong) {
            setCurrentsong(currentSong)
            setIsPlaying(true)
        }
    }, [currentIndex]);
    function handleplay() {

        if (currentSong) {
            togglePlay();
        }

    }

    function handlenext() {
         
        dispatch(nextSong());
        
    }
    function handleprev() {
         
        dispatch(prevSong());
        
    }
    
    return (
        <>
            <div className=" relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 w-60 h-80 mx-auto mt-8 rounded-xl">
                <Heart
                    size={18}
                    className="bg-white p-0.5 rounded-full absolute right-2 top-2 cursor-pointer hover:scale-110 transition"
                />
                <div className=" mx-auto  w-40 h-40 ">
                    <motion.img
                        src={cd}
                        alt="cd"
                        className="w-40 h-40 p-2 rounded-full"
                        animate={controls} />
                </div>

                <div className=" bg-[#121212] text-white mt-4 h-40 rounded-b-xl">
                    <div>
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={progress || 0}
                            onChange={(e) => {
                                const time = Number(e.target.value);
                                seek(time);
                            }}
                            className="w-full appearance-none h-1 rounded-lg  cursor-pointer text-white font-semibold text-sm truncate"
                            style={{
                                background: `linear-gradient(to right, #ff0000 ${duration ? (progress / duration) * 100 : 0
                                    }%, #9ca3af ${duration ? (progress / duration) * 100 : 0}%)`
                            }}
                        />
                    </div>
                    <div className='flex ml-4 gap-40'>
                        {duration > progress ? (
                            <>
                                <p>{formatTime(progress)}</p>
                                <p>{formatTime(duration)}</p>
                            </>
                        ) : (
                            <>
                                <p>0:00</p>
                                <p>0:00</p>
                            </>
                        )}
                    </div>

                    {/**Songname Artist */}

                    <div className="flex flex-col justify-center px-4 py-2 max-w-[200px] pt-4 h-fit ">
                        <p className="text-white font-semibold text-sm truncate">
                            {currentSong?.title || "No song"}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                            {currentSong?.artist || "Unknown artist"}
                        </p>
                    </div>
                    <div className="flex gap-4 pl-20 pt-6">
                        <StepBack size={18} onClick={handleprev} />
                        {!isPlaying
                            ? <Play size={18} onClick={handleplay} />
                            : <Pause size={18} onClick={handleplay} />
                        }
                        <StepForward size={18} onClick={handlenext} />
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 w-60 h-50 mx-auto mt-8 rounded-xl overflow-y-scroll no-scrollbar">

            </div>
        </>
    )
}


export default SongCard