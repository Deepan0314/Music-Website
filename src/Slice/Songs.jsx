import { createSlice } from "@reduxjs/toolkit";
import { Songslist } from "../Data/Song.js";

const initialState = {
  playlist: Songslist,
  currentIndex: -1,
  isPlaying: false,
};

const Songs = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // ➕ Add new song
    addSong: (state, action) => {
      state.playlist.push(action.payload);
    },

    // ▶️ Set current song
    setPlayer: (state, action) => {
      state.currentIndex = action.payload;
      state.isPlaying = true;
    },

    // ⏭️ Next song
    nextSong: (state) => {
      state.currentIndex =
        (state.currentIndex + 1) % state.playlist.length;
    },

    // ⏮️ Previous song
    prevSong: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.playlist.length) %
        state.playlist.length;
    },

    // ⏯️ Toggle play
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const {
  addSong,
  setPlayer,
  nextSong,
  prevSong,
  togglePlay,
} = Songs.actions;

export default Songs.reducer;