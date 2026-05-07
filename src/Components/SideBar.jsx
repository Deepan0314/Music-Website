import React, { useState } from 'react'
import {
  House, Search, ListMusic, SquarePlus, TableOfContents, ChevronLeft, ChevronRight,
  Bell, Settings,


} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  function sideBar() {
    setOpen(() => !open)
  }

  let defaultuser = "https://ui-avatars.com/api/?name=Deepan";
  const [click, setClick] = useState("home");

  function handleClick(pre) {
    setClick(pre)


  }

  return (
    <>
      <div className=' mt-10 ml-4 flex gap-4   '>

        <div> <TableOfContents size={20} className='text-white mt-1 block md:hidden hover:scale-110 transition-all' onClick={sideBar} /></div>

        <motion.div


        > <h1 className='font-bold text-green-400 '> THE SONIC IMMERSIVE</h1>
          <h3 className='text-gray-500'>Premium tier</h3>
        </motion.div>
        <div>{defaultuser ? <img src={defaultuser} alt='contact' className='w-10 h-10 rounded-full' /> :
          <Avatar
            name="Deepan Raj"
            variant="sunset"
            size={30}
          />
        }</div>

      </div>
      < motion.div
        initial={{ translateX: -100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='mt-20  decoration-none text-xl font-bold text-white sm:hidden md:block'>

        <ul className='decoration-none   mx-5 cursor-pointer'>
          <Link to='/home'><li className={`${click === 'home' ? "bg-[#5F5E5E]" : ""} rounded p-4 flex  items-center gap-2 hover:scale-110 transition-all duration-300 `} onClick={() => handleClick('home')}><House size={20} />Home</li></Link>
          <Link to='/search'><li className={`${click === 'search' ? "bg-[#5F5E5E]" : ""} rounded p-4 flex  items-center gap-2 hover:scale-110 transition-all duration-300 `} onClick={() => handleClick('search')}><Search size={20} />search</li></Link>
          <Link to='/yourlibrary'> <li className={`${click === 'music' ? "bg-[#5F5E5E]" : ""} rounded p-4 flex  items-center gap-2 hover:scale-110 transition-all duration-300 `} onClick={() => handleClick('music')}><ListMusic size={20} />Your Library</li></Link>
         <Link to='/yourlibrary'> <li className={`${click === 'square' ? "bg-[#5F5E5E]" : ""} rounded p-4 flex  items-center gap-2 hover:scale-110 transition-all duration-300 `} onClick={() => handleClick('square')}><SquarePlus size={20} />Create Playlist</li></Link>
        </ul>
      </motion.div>
    </>
  )
}

export default SideBar