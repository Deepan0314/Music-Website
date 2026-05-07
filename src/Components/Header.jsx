import React from 'react'
import {
    TableOfContents, ChevronLeft, ChevronRight,
    Bell, Settings,

    MoveRight,

} from 'lucide-react'
const Header = () => {
  return (
    <div className='flex justify-between '>
                    <div className='flex gap-2 ml-4 cursor-pointer mt-4  '>
                        <ChevronLeft size={20} className='text-white hover:bg-gray-500  rounded-full' />
                        <ChevronRight size={20} className='text-white  hover:bg-gray-500 rounded-full' />
                    </div>
                    <div className='flex text-white mt-4 gap-4  '>
                        <Bell size={20} className='hover:bg-gray-500 rounded-full  w-8' />
                        <Settings size={20} className='hover:bg-gray-500 rounded-full w-8  ' />
                    </div>
                </div>
  )
}

export default Header