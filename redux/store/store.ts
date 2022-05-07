import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/slices/auth.slice";
import notiReducer from "../modules/notification/slices/notification.slice";

const store = configureStore({
  reducer: {
    authReducer,
    notiReducer,
  },
});

export default store;
