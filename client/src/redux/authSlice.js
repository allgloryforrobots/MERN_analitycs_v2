import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import API from '../api/axios'

const api = new API()

export const loginThunk = createAsyncThunk(
    'auth/loginThunk',      
    async (payload, thunkAPI) => {
      const response = await api.login(payload)
      console.log('auth/loginThunk, response', response, response.response.data.message)
 
      // Handle error from express 
      if (response.response.data.message) throw new Error(response.response.data.message)

      localStorage.setItem('userData', JSON.stringify({
        userId: response.data.userId, token: response.data.token, createTime: response.data.createTime
      }))

      return response.data 
    }
  )


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,  
        token: null,
        userId: null,
        error: false,
        loading: false,
        errMessage: null,
        registerRedirect: false
    },
    reducers: {
      login: (state, action) => {
        console.log('authSlice/login', action.payload)
        state.isAuth = true;
        state.token = action.payload.token
        state.userId = action.payload.userId
      },
      logout: (state) => {
        state.isAuth = false
        state.token = null
        state.userId = null
      },
      nullErrorMessage: (state) => {
        state.errMessage = null
      }
    },

    extraReducers: {
        [loginThunk.fulfilled]: (state, action) => {
          state.isAuth = true
          state.token = action.payload.token
          state.userId = action.payload.userId
          state.loading = false
          state.error = false
        },
        [loginThunk.pending]: (state) => {
          state.loading = true
          state.error = false
        },
        [loginThunk.rejected]: (state, action) => {
          state.loading = false
          state.error = true
          console.log('loginThunk.rejected/ action.error', action.error)
          state.errMessage = action.error.message || 'Sorry, something went wrong'
        },
      }
  })
  

  export const { login, logout, nullErrorMessage } = authSlice.actions
  
  export default authSlice.reducer