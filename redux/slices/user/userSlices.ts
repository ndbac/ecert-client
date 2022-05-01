import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { UsersState, IIamUser, IUserLogin } from "../../interface/user/user.interface";
import baseUrl from "../../../utils/baseUrl";

export const loginUserAction = createAsyncThunk(
    "user/login",
    async (userData: IUserLogin, { rejectWithValue, getState, dispatch }) => {
        console.log(userData, baseUrl);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            console.log(`${baseUrl}/auth/login`);
            const { data } = await axios.put<IIamUser>(
                `${baseUrl}/auth/login`,
                userData,
                config
            );
            localStorage.setItem("token", data.token.access_token);
            return data.token.access_token;
        } catch (error) {
            return rejectWithValue(error);
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
        });
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default userSlices.reducer;
