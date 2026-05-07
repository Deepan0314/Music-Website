import React from 'react'

import { Artist } from '../Data/Artist'


const ArtistBanner = () => {
    
    return (
        
            <div className=' flex gap-14   items-center mx-auto px-8 overflow-x-scroll no-scrollbar'>
               {Artist.map((artist)=>(
                <div key={artist.title}>
                   <div className=' w-30 h-30 rounded-full flex  items-center justify-center hover:scale-110 transition-all duration-300  '>
                        <img src={artist.banner} alt='Anirudh' loading='lazy' className='w-30 h-30 rounded-full ' />

                    </div>
                    <h1 className='text-white text-sm px-4  '>{artist.title}</h1>
                </div>
               ))}



            </div>
        
    )
}

export default ArtistBanner