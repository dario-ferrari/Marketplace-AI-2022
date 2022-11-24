import { createSlice } from "@reduxjs/toolkit";
import {buscarUsuarioPorEmail} from "../../controller/usuarios.controller"

const initialState = {
  username: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    async loadUserData(state, action) {
      console.log(action.payload);
      let respuestaUsuario = await buscarUsuarioPorEmail(action.payload.email)
      console.log(
        "Console log de respuesta de back para usuario ",
        JSON.stringify(respuestaUsuario)
      );
      const user = respuestaUsuario.user[0];
      state.email = user.email;
      state.username = user.nombre;
    },
  },
});

export const { loadUserData } = userSlice.actions;
export default userSlice.reducer;
