import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import {
  AuthState,
  IIamUser,
  IUserLogin,
  IUserRegister,
} from '../interfaces/auth.interface'
import baseUrl from '../../../../utils/baseUrl'

export const loginUserAction = createAsyncThunk(
  'auth/login',
  async (userData: IUserLogin, { rejectWithValue }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const { data } = await axios.put<IIamUser>(
        `${baseUrl}/auth/login`,
        userData,
        config
      )
      localStorage.setItem('token', data.token.access_token)
      localStorage.setItem('id', data.id)
      return data
    } catch (error) {
      const err = error as AxiosError | Error
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data)
      } else {
        return rejectWithValue(err)
      }
    }
  }
)

export const registerUserAction = createAsyncThunk(
  'auth/register',
  async (userData: IUserRegister, { rejectWithValue }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const { data } = await axios.post(
        `${baseUrl}/auth/register`,
        userData,
        config
      )
      return data
    } catch (error) {
      const err = error as AxiosError | Error
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data)
      } else {
        return rejectWithValue(err)
      }
    }
  }
)

const authSlices = createSlice({
  name: 'auth',
  initialState: {} as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    // Login user action
    builder.addCase(loginUserAction.pending, (state) => {
      state.loading = true
      state.serverErr = undefined
    })
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload
      state.loading = false
      state.serverErr = undefined
    })
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.serverErr = action?.error?.message
      state.loading = false
    })
    // Register user action
    builder.addCase(registerUserAction.pending, (state) => {
      state.loading = true
      state.serverErr = undefined
    })
    builder.addCase(registerUserAction.fulfilled, (state) => {
      state.registered = true
      state.loading = false
      state.serverErr = undefined
    })
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.serverErr = action?.error?.message
      state.loading = false
    })
  },
})

export default authSlices.reducer
