import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IEmailSubscribers, NotificationState, IEmailSend} from "../interfaces/notification.interface";
import baseUrl from "../../../../utils/baseUrl";

export const userSubscribeForNews = createAsyncThunk(
    "notification/subscribe",
    async (emailData: IEmailSubscribers, { rejectWithValue, getState, dispatch }) => {
        console.log(emailData);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const { data } = await axios.post(
                `${baseUrl}/notification`,
                emailData,
                config
            );
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
export const userSendEmail = createAsyncThunk(
    "notification/subscribe",
    async (emailData: IEmailSend, { rejectWithValue, getState, dispatch }) => {
        console.log(emailData);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const { data } = await axios.post(
                `${baseUrl}/notification`,
                emailData,
                config
            );
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


const notificationSlices = createSlice({
    name: "notification",
    initialState: {} as NotificationState,
    reducers: {},
    extraReducers: (builder) => {
        // Send email subscribe
        builder.addCase(userSubscribeForNews.pending, (state, action) => {
            state.loading = true;
            state.serverErr = undefined;
        });
        builder.addCase(userSubscribeForNews.fulfilled, (state, action) => {
            state.emailSent = true;
            state.loading = false;
            state.serverErr = undefined;
        });
        builder.addCase(userSubscribeForNews.rejected, (state, action) => {
            state.serverErr = action?.error?.message;
            state.loading = false;
        });
    },
});

export default notificationSlices.reducer;
