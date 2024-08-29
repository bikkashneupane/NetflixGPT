import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Movies",
  initialState: { nowPlayingMovies: [] },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { addNowPlayingMovies } = actions;
export default reducer;
