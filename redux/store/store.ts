import { configureStore } from "@reduxjs/toolkit";

import notiReducer from "../slices/notification/notiSlices";
import userReducer from "../slices/user/userSlices";
import postReducer from "../slices/post/postSlices";

const store = configureStore({
  reducer: {
    notiReducer,
    userReducer,
    postReducer,
  },
});

export default store;
