  import { configureStore } from "@reduxjs/toolkit";
  import SongInfo from "../Slice/Songs";

  export const store = configureStore({
    reducer: {
      songList: SongInfo,
    },
  });



