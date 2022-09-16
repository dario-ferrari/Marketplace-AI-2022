import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggIn(state, action) {
      state.logged = true
    }
  },
})

export const { loggIn } = authSlice.actions
export default authSlice.reducer
