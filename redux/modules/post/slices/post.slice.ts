import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseUrl from '../../../../utils/baseUrl'
import axios, { AxiosError } from 'axios'
import { IPostGet, IPostState } from '../interface/post.interface'

export const getPost = createAsyncThunk(
    'user/post',
    async (data: IPostGet, { rejectWithValue }) => {
      try {
        const url = `${baseUrl}/user/post`
        const response = await axios.get(url, { params: data })
        return response.data
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

export const postSlices = createSlice({
    name: 'post',
    initialState: {} as IPostState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state) => {
                state.loading = true
                state.serverErr = undefined
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.loading = false
                state.post = { ...action.payload }
                state.list = [...action.payload]
                state.serverErr = undefined
            })
            .addCase(getPost.rejected, (state, action) => {
                state.serverErr = action?.error?.message
                state.loading = false
            })
    }
})

export default postSlices.reducer