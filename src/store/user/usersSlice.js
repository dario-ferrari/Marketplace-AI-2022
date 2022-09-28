import { createSlice } from "@reduxjs/toolkit";
import usuarios from "../../data/usuarios.js";

const initialState = {
  username: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserData(state, action) {
      console.log(action.payload);
      const user = usuarios.find((u) => u.email === action.payload.email);
      state.email = user.email;
      state.username = user.username;
    },
  },
});

export const { loadUserData } = userSlice.actions;
export default userSlice.reducer;
