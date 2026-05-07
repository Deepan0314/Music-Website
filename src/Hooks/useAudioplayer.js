    import React, { useEffect, useState, useRef } from 'react'

    export const useAudioplayer = () => {
        const [isPlaying, setIsPlaying] = useState(false);

        const [currentsong, setCurrentsong] = useState(null);
        const [duration, setDuration] = useState(0);
        const [progress, setProgress] = useState(0);
        const audioref = useRef(new Audio());


        //setting Currentsong
        useEffect(() => {
            if (!currentsong) return;
            audioref.current.src = currentsong.audioUrl;

        }, [currentsong]);

        //play && pause

        useEffect(()=>{

            const audio=audioref.current;
            if(isPlaying && currentsong){
                audio.play().catch(()=>{});
            }
            else{
                audio.pause();
            }

        },[isPlaying,currentsong]);

        //setting Progress and duration

        useEffect(() => {
            const audio = audioref.current;

            const UpdateProgress = () => {
                setProgress(audio.currentTime);
            }

            const setMeta = () => {
                setDuration(audio.duration);
            }

            const handleEnded=()=>{
                setIsPlaying(false);
                setProgress(0);
                audio.currentTime=0;
            }

            audio.addEventListener("timeupdate", UpdateProgress);
            audio.addEventListener("loadedmetadata", setMeta);
            audio.addEventListener("ended",handleEnded);     
            return () => {
                audio.removeEventListener("timeupdate", UpdateProgress);
                audio.removeEventListener("loadedmetadata", setMeta);
                audio.removeEventListener("ended", handleEnded);
            };
        }, []);

        //Time format

        const formatTime = (time) => {
            if (!time || isNaN(time)) return "0:00";

            const minute = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);

            return `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
        }

        const togglePlay = () => {
            setIsPlaying(prev => !prev)
        }

        const seek = (time) => {
        audioref.current.currentTime = time;
        setProgress(time);
    };

        return {
            seek,
            isPlaying,
            togglePlay,
            setCurrentsong,
            duration,
            progress,
            formatTime,
            setIsPlaying,
        }
    }

