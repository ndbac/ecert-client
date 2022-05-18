import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../modules/auth/slices/auth.slice'
import notiReducer from '../modules/notification/slices/notification.slice'
import commentReducer from '../modules/comment/slices/comment.slice'
import accountReducer from '../modules/account/slices/account.slice'

const store = configureStore({
  reducer: {
    authReducer,
    notiReducer,
    commentReducer,
    accountReducer
  },
})

export default store
