import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../authModule/slices/authSlices";

const store = configureStore({
  reducer: {
    authReducer,
  },
});

export default store;
