import { createSlice } from "@reduxjs/toolkit";

export const workshopSlice = createSlice({
    name: "workshop",
    initialState: {
        workshops: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getworkshopStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getworkshopSuccess: (state, action) => {
            state.isFetching = false;
            state.workshops = action.payload;
        },
        getworkshopFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteworkshopStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteworkshopSuccess: (state, action) => {
            state.isFetching = false;
            state.workshops.splice(
                state.workshops.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteworkshopFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        updateworkshopStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateworkshopSuccess: (state, action) => {
            state.isFetching = false;
            state.workshops[
                state.workshops.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.workshop;
        },
        updateworkshopFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        addworkshopStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addworkshopSuccess: (state, action) => {
            state.isFetching = false;
            state.workshops.push(action.payload);
        },
        addworkshopFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getworkshopStart,
    getworkshopSuccess,
    getworkshopFailure,
    deleteworkshopStart,
    deleteworkshopSuccess,
    deleteworkshopFailure,
    updateworkshopStart,
    updateworkshopSuccess,
    updateworkshopFailure,
    addworkshopStart,
    addworkshopSuccess,
    addworkshopFailure,
} = workshopSlice.actions;

export default workshopSlice.reducer;