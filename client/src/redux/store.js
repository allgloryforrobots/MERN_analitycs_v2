import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import registerReducer from './registerSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer
  },
})