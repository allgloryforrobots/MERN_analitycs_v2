import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../api/axios'

const api = new API()

export const loginThunk = createAsyncThunk(
    'auth/loginThunk',
    async (payload, thunkAPI) => {
      const response = await api.login(payload)
      localStorage.setItem('userData', JSON.stringify({
        userId: response.data.userId, token: response.data.token, createTime: response.data.createTime
      }))
      console.log('auth/loginThunk', response.data)
      return response.data
    }
  )

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,  
        token: null,
        userId: null
    },
    reducers: {
      login: (state, action) => {
        console.log('authSlice/login', action.payload)
        state.isAuth = true;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      },
      logout: (state) => {
        state.isAuth = false;
        state.token = null;
        state.userId = null;
      },
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state, action) => {
          state.isAuth = true;
          state.token = action.payload.token;
          state.userId = action.payload.userId;
        }
      }
  })
  

  export const { login, logout } = authSlice.actions
  
  export default authSlice.reducer