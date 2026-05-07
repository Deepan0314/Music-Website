import React, { lazy, useEffect, useState } from 'react'
import Kuththu from '../assets/Kuththu.jpg'
import Music from '../assets/Music.jpg'
import Vibe from '../assets/Vibe.jpg'
import Melody from '../assets/Melody.jpg'
import { TitleSkeleton } from './Skeleton.jsx'

const Titlebanner = [
  {
    banner: Kuththu,
    title: "Kuththu Songs"
  },
  {
    banner: Music,
    title: "Sad Songs"
  },
  {
    banner: Vibe,
    title: "Vibe Songs"
  },
  {
    banner: Melody,
    title: "Melody Songs"
  },
];

const TitleBanner = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, (1000));
    return () => clearTimeout(timer);  //cleanup
  }, []
  );
  return (
    <div className=' flex flex-wrap gap-8'>
      {isLoading ? Array(4).fill(0).map((_, i) => <TitleSkeleton key={i}  />) :
        Titlebanner.map((banners) => (

          <button key={banners.title} className="bg-cover bg-center rounded-2xl flex items-center gap-4 w-60 h-24 hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: "url('/Blue.jpg')" }} >
            <img
              src={banners.banner}
              alt={banners.title}
              className='w-24   h-24 rounded-l-xl ' loading='lazy' />
              <span className='font-semibold text-white'>
            {banners.title}
            </span>
          </button>

        ))}
    </div>

  )
}

export default TitleBanner