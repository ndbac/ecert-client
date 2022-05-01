import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { UsersState, IIamUser, IUserLogin } from "../../interface/user/user.interface";
import baseUrl from "../../../utils/baseUrl";

export const loginUserAction = createAsyncThunk(
    "user/login",
    async (userData: IUserLogin, { rejectWithValue, getState, dispatch }) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const { data } = await axios.put<IIamUser>(
                `${baseUrl}/auth/login`,
                userData,
                config
            );
            localStorage.setItem("token", data.token.access_token);
            localStorage.setItem("id", data.id);
            return data;
        } catch (error) {
            const err = error as AxiosError | Error;
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err?.response?.data);
            } else {
                return rejectWithValue(err);
            }
        }
    }
);

const userSlices = createSlice({
    name: "user",
    initialState: {} as UsersState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUserAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.userAuth = action?.payload;
            state.loading = false;
            state.serverErr = undefined;
        });
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.serverErr = action?.error?.message;
            state.loading = false;
        });
    },
});

export default userSlices.reducer;
