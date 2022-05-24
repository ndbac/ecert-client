import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../modules/auth/slices/auth.slice'
import notiReducer from '../modules/notification/slices/notification.slice'
import categoryReducer from '../modules/category/slices/category.slice'
import commentReducer from '../modules/comment/slices/comment.slice'
import accountReducer from '../modules/account/slices/account.slice'
import postReducer from '../modules/post/slices/post.slice'
import verifyReducer from '../modules/verify/slices/verify.slice'

const store = configureStore({
  reducer: {
    authReducer,
    notiReducer,
    categoryReducer,
    commentReducer,
    accountReducer,
    postReducer,
    verifyReducer
  },
})

export default store
