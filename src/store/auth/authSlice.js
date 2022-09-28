import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggIn(state, action) {
      state.logged = true;
    },
    loggOut(state, action) {
      state.logged = false;
    },
  },
});

export const { loggIn, loggOut } = authSlice.actions;
export default authSlice.reducer;