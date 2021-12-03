import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: "event",
    initialState: {
        events: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        geteventStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        geteventSuccess: (state, action) => {
            state.isFetching = false;
            state.events = action.payload;
        },
        geteventFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteeventStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteeventSuccess: (state, action) => {
            state.isFetching = false;
            state.events.splice(
                state.events.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteeventFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        updateeventStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateeventSuccess: (state, action) => {
            state.isFetching = false;
            state.events[
                state.events.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.event;
        },
        updateeventFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        addeventStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addeventSuccess: (state, action) => {
            state.isFetching = false;
            state.events.push(action.payload);
        },
        addeventFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    geteventStart,
    geteventSuccess,
    geteventFailure,
    deleteeventStart,
    deleteeventSuccess,
    deleteeventFailure,
    updateeventStart,
    updateeventSuccess,
    updateeventFailure,
    addeventStart,
    addeventSuccess,
    addeventFailure,
} = eventSlice.actions;

export default eventSlice.reducer;