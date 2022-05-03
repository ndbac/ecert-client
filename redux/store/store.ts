import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/authModule/slices/authSlices";

const store = configureStore({
  reducer: {
    authReducer,
  },
});

export default store;
