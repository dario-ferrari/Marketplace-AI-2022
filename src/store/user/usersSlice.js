import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserData(state, action) {
      state.username = action.payload.username;
      state.progress = action.payload.progress;
    },
  },
});

export const { loadUserData } = userSlice.actions;
export default userSlice.reducer;
