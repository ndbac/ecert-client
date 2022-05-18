import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseUrl from '../../../../utils/baseUrl'
import axios, { AxiosError } from 'axios'
import {
  CommentState,
  CommentPost,
  CommentDelete,
  CommentUpdate,
  CommentGet,
} from '../interface/comment.interface'

export const getComment = createAsyncThunk(
  'user/comment',
  async (data: CommentGet, { rejectWithValue }) => {
    try {
      const url = `${baseUrl}/user/comment`
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

export const postComment = createAsyncThunk(
  'user/comment/post',
  async (data: CommentPost, { rejectWithValue }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`,
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.post(`${baseUrl}/user/comment`, data, config)
      console.log(res.data)
      return res.data
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
export const deleteComment = createAsyncThunk(
  'user/comment/delete',
  async (data: CommentDelete, { rejectWithValue }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`,
        Accept: 'application/json',
      },
    }
    try {
      await axios.delete(`${baseUrl}/user/comment/delete/${data.id}`, config)
      return data.id
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

export const updateComment = createAsyncThunk(
  'user/comment/update',
  async (data: CommentUpdate, { rejectWithValue }) => {
    console.log(data)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`,
        Accept: 'application/json',
      },
    }
    const newData = {
      text: data.text,
    }
    try {
      await axios.put(`${baseUrl}/user/comment/${data.id}`, newData, config)
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

export const commentSlices = createSlice({
  name: 'comment',
  initialState: {} as CommentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComment.pending, (state) => {
        state.loading = true
        state.serverErr = undefined
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.loading = false
        state.list = [...action.payload]
        state.serverErr = undefined
      })
      .addCase(getComment.rejected, (state, action) => {
        state.serverErr = action?.error?.message
        state.loading = false
      })
      .addCase(postComment.pending, (state) => {
        state.loading = true
        state.serverErr = undefined
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.loading = false
        state.list = [...state.list, action.payload]
        state.serverErr = undefined
      })
      .addCase(postComment.rejected, (state, action) => {
        state.serverErr = action?.error?.message
        state.loading = false
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true
        state.serverErr = undefined
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        ;(state.loading = false),
          (state.list = state.list.filter(
            (item) => item._id !== action.payload
          ))
        state.serverErr = undefined
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.serverErr = action?.error?.message
        state.loading = false
      })
      .addCase(updateComment.pending, (state) => {
        state.loading = true
        state.serverErr = undefined
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.loading = false
        const data = action.payload

        state.list = state.list.map((item) => {
          if (item._id == data.id) {
            return (item = { ...item, text: data.text })
          } else return item
        })
        state.serverErr = undefined
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.serverErr = action?.error?.message
        state.loading = false
      })
  },
})
export default commentSlices.reducer
