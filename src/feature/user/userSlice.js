import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "User",
  initialState: { user: {} },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = [];
    },
  },
});

const { reducer, actions } = slice;
export const { addUser, removeUser } = actions;
export default reducer;
