import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from '../../../../utils/baseUrl'
import axios, { AxiosError } from 'axios'
import {  CategoryPost, CategoryState } from "../interfaces/category.interface";

// export const getCategory = createAsyncThunk(
//     'creator/category',
//     async (data: CategoryGet, { rejectWithValue }) => {
//         try {
//             const res = await axios.get(`${baseUrl}/user/category`)
//             return res.data
//         }   catch(error) {
//             const err = error as AxiosError | Error
//             if (axios.isAxiosError(err)) {
//                 return rejectWithValue(err?.response?.data)
//             } else {
//                 return rejectWithValue(err)
//             }
//         }
//     }
// )

export const postCategory = createAsyncThunk(
    'creator/category/post',
    async (data: CategoryPost, { rejectWithValue}) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.token}`,
                Accept: 'application/json'
            }           
        }
        try {
            const res = await axios.post(`${baseUrl}/creator/category`, data, config)
            return res.data
        } catch(error) {
            const err = error as AxiosError | Error
            if (axios.isAxiosError(err)) {
              return rejectWithValue(err?.response?.data)
            } else {
              return rejectWithValue(err)
            }
        }
    }
)

// export const deleteCategory = createAsyncThunk(
//     'creator/category/delete',
//     async (data: CategoryDelete, { rejectWithValue}) => {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${data.token}`,
//                 Accept: 'application/json'
//             }           
//         }
//         try {
//             await axios.delete(`${baseUrl}/creator/category/${data.categoryId}`, config)
//             return data.categoryId
//         } catch(error) {
//             const err = error as AxiosError | Error
//             if (axios.isAxiosError(err)) {
//               return rejectWithValue(err?.response?.data)
//             } else {
//               return rejectWithValue(err)
//             }
//         }
//     }
// )

// export const updateCategory = createAsyncThunk(
//     'creator/category/update',
//     async (data: CategoryUpdate, { rejectWithValue }) => {
//       console.log(data)
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${data.token}`,
//           Accept: 'application/json',
//         },
//       }
//       const newData = {
//         name: data.name,
//       }
//       try {
//         await axios.put(`${baseUrl}/creator/category/${data.categoryId}`, newData, config)
//         return data
//       } catch (error) {
//         const err = error as AxiosError | Error
//         if (axios.isAxiosError(err)) {
//           return rejectWithValue(err?.response?.data)
//         } else {
//           return rejectWithValue(err)
//         }
//       }
//     }
//   )

export const categorySlice = createSlice({
    name: 'category',
    initialState: {} as CategoryState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get
            // .addCase(getCategory.pending, (state) => {
            //     state.loading = true
            //     state.serverErr = undefined
            // })
            // .addCase(getCategory.fulfilled, (state, action) => {
            //     state.loading = false
            //     state.list = [...action.payload]
            //     state.serverErr = undefined
            // })
            // .addCase(getCategory.rejected, (state, action) => {
            //     state.serverErr = action?.error?.message
            //     state.loading = false
            // })
            //post
            .addCase(postCategory.pending, (state) => {
                state.loading = true
                state.serverErr = undefined
              })
            .addCase(postCategory.fulfilled, (state, action) => {
                state.loading = false
                state.sent = true
                state.serverErr = undefined
              })
            .addCase(postCategory.rejected, (state, action) => {
                state.serverErr = action?.error?.message
                state.loading = false
              })
            //delete
            // .addCase(deleteCategory.pending, (state) => {
            //     state.loading = true
            //     state.serverErr = undefined
            //   })
            // .addCase(deleteCategory.fulfilled, (state, action) => {
            //     ;(state.loading = false),
            //       (state.list = state.list.filter(
            //         (item) => item._id !== action.payload
            //       ))
            //     state.serverErr = undefined
            //   })
            // .addCase(deleteCategory.rejected, (state, action) => {
            //     state.serverErr = action?.error?.message
            //     state.loading = false
            //   })
            // //put
            // .addCase(updateCategory.pending, (state) => {
            //     state.loading = true
            //     state.serverErr = undefined
            //   })
            // .addCase(updateCategory.fulfilled, (state, action) => {
            //     state.loading = false
            //     const data = action.payload
        
            //     state.list = state.list.map((item) => {
            //       if (item._id == data.categoryId) {
            //         return (item = { ...item, name: data.name })
            //       } else return item
            //     })
            //     state.serverErr = undefined
            //   })
            // .addCase(updateCategory.rejected, (state, action) => {
            //     state.serverErr = action?.error?.message
            //     state.loading = false
            //   })
    }
})

export default categorySlice.reducer