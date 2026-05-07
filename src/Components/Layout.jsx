import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

import Header from "./Header";
import SongCard from "./SongCard";

const Layout = () => {

    return (
        <div className=' grid sm:grid-cols-[30%_70%] md:grid-cols-[300px_2fr_300px] h-screen'>

            {/* Sidebar (fixed) */}
            <div className="bg-[#1C1B1B] ">
                <SideBar />
            </div>
            {/* Main Area */}
            <div className="flex flex-col overflow-y-scroll no-scrollbar h-screen bg-black">

                {/* Navbar (fixed) */}

                <Header />
                {/* Dynamic Content */}
                <div className="flex-1  p-4">
                    <Outlet />
                </div>

            </div>
            <div className="bg-[#1C1B1B]">
                <SongCard />

            </div>
        </div>
    );
};

export default Layout;