  import { configureStore } from "@reduxjs/toolkit";
  import SongInfo from "../Slice/Songs";
   import AlbumInfo from "../Slice/Album";
import { Artist } from "../Data/Artist";
import { setArtist } from "../Slice/Album";

  export const store = configureStore({
    reducer: {
      songList: SongInfo,
      ArtistList: AlbumInfo,
    },
  });



