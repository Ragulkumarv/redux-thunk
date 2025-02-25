import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

export const userStore = configureStore({
  reducer: {
    users: userReducer, //import firstly using slice name then rename to whatever reducer as default export
  },
});
