import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  trailerVideo: {},
};

const slice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { addNowPlayingMovies, setTrailerVideo } = actions;
export default reducer;
