import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/usersSlice";
import { userMiddleware } from "./user/userMiddleware";

import authReducer from "./auth/authSlice";
import { authMiddleware } from "./auth/authMiddleware";

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer
  },
  middleware: [userMiddleware, authMiddleware],
});
