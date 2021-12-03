import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentuser: null,
    isFetching: false,
    err: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        loginStart: (state) => {

            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            console.log(action);
            state.currentuser = action.payload;
            state.isFetching = false;
        },
        loginError: (state) => {
            state.isFetching = false;
            state.err = true
        },

        logout: (state) => {
            state.currentuser = null
        }
    }


})

export const {
    loginStart, loginSuccess, loginError, logout
} = userSlice.actions

export default userSlice.reducer