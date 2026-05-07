import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["All", "Playlists", "Artists", "Albums"];

const YourLibrary = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-black text-white pt-20 h-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Your Library</h1>
        <div className="flex gap-3">
          <button>🔍</button>
          <motion.button
            whileHover={{ rotateX: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
           
            
          >➕</motion.button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-full ${activeTab === tab ? "bg-white text-black" : "bg-gray-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-3">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg"
          >
            <div className="w-12 h-12 bg-gray-700 rounded"></div>
            <div>
              <p className="font-semibold">Playlist Name</p>
              <p className="text-sm text-gray-400">10 songs</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default YourLibrary;