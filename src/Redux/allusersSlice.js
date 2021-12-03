import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isFetching: false,
        error: false,
        msg: '',
    },
    reducers: {
        //GET ALL
        getusersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getusersSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload

        },
        getusersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteuserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteuserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((item) => item._id === action.payload.id),
                1
            );
            state.msg = action.payload.msg;
        },
        deleteuserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        updateuserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateuserSuccess: (state, action) => {
            state.isFetching = false;
            state.users[
                state.users.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.user;
        },
        updateuserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        adduserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        adduserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload);
        },
        adduserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getusersStart,
    getusersSuccess,
    getusersFailure,
    deleteuserStart,
    deleteuserSuccess,
    deleteuserFailure,
    updateuserStart,
    updateuserSuccess,
    updateuserFailure,
    adduserStart,
    adduserSuccess,
    adduserFailure,
} = usersSlice.actions;

export default usersSlice.reducer;