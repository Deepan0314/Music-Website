import { createSlice } from "@reduxjs/toolkit";
import { Songslist } from "../Data/Song";

const initialState = {
    artistSongs: [],
};

const Album = createSlice({
    name: "artist",
    initialState: initialState,
    reducers: {
        setArtist: (state, action) => {
            const newList = Songslist.filter((song) => (
                song.artist == action.payload

            ))
        
            state.artistSongs = newList;
            
        }
    }
})



export const { setArtist } = Album.actions;
export default Album.reducer;