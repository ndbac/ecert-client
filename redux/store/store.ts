import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../modules/auth/slices/auth.slice'
import notiReducer from '../modules/notification/slices/notification.slice'
import categoryReducer from '../modules/category/slices/category.slice'

const store = configureStore({
  reducer: {
    authReducer,
    notiReducer,
    categoryReducer
  },
})

export default store
