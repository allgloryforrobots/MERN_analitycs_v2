import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import API from '../api/axios'

const api = new API()

export const registerThunk = createAsyncThunk(
    'register/registerThunk',      
    async (payload, thunkAPI) => {
      const response = await api.register(payload)

      console.log('register/registerThunk, response', response)

      return response.data || response.response.data.message || response.response.data.error || response
    }
  )


export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        error: false,
        loading: false,
        errMessage: null,
        registerRedirect: false
    },
    reducers: {

      nullErrorMessage: (state) => {
        state.errMessage = null
      },
      falseRedirect: (state) => {
        state.registerRedirect = false
      }

    },

    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {
          state.registerRedirect = true
          state.loading = false
          state.error = false
        },
        [registerThunk.pending]: (state) => {
          state.loading = true
          state.error = false
        },
        [registerThunk.rejected]: (state, action) => {
          state.loading = false
          state.error = true
          state.errMessage = action.payload || 'Sorry, something went wrong'
        },
      }
  })
  

  export const { falseRedirect, nullErrorMessage } = registerSlice.actions
  
  export default registerSlice.reducer