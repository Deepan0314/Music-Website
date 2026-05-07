import React, { useState } from 'react'
import {
    TableOfContents, ChevronLeft, ChevronRight,
    Bell, Settings,

    MoveRight
} from 'lucide-react'

import Avatar from 'boring-avatars'

import { AnimatePresence, easeOut, motion } from "framer-motion";
import SideBar from '../Components/SideBar';
import TitleBanner from '../Components/TitleBanner';
import ArtistBanner from '../Components/ArtistBanner';
import RecentlyPlayed from '../Components/RecentlyPlayed';



const Home = () => {

    const [open, setOpen] = useState(false);
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning ☀️";
        if (hour < 17) return "Good Afternoon 🌤️";
        if (hour < 21) return "Good Evening 🌆";
        return "Good Night 🌙";
    };
    const greeting = getGreeting();
    function sideBar() {
        setOpen(() => !open)
    }

    let defaultuser = "https://ui-avatars.com/api/?name=Deepan";
    return (
        <>

            <div className="bg-black min-h-screen w-full">
                <div className="max-w-5xl mx-auto px-4">

                    <h1 className="text-5xl md:text-7xl font-serif text-white pt-20">
                        {greeting}
                    </h1>

                    {/* Title Banner */}
                    <div className="mt-20">
                        <TitleBanner />
                    </div>

                    {/* Artist Banner */}
                    <div className="mt-16 text-white text-3xl font-serif font-bold">
                        <div className="flex justify-between items-center">
                            <h1>Artists</h1>
                            <MoveRight className="hover:scale-125 transition-transform duration-300 cursor-pointer" />
                        </div>

                        <ArtistBanner />
                    </div>

                    {/* Recently Played */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-serif font-semibold text-white">Recently Played</h3>
                        <RecentlyPlayed />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home