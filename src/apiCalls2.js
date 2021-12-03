
import {
    geteventStart, geteventSuccess, geteventFailure,
    updateeventFailure, updateeventStart, updateeventSuccess,
    deleteeventFailure, deleteeventStart, deleteeventSuccess,
    addeventFailure, addeventStart, addeventSuccess
} from './Redux/eventSlice'

import {
    getworkshopFailure, getworkshopStart, getworkshopSuccess,
    addworkshopFailure, addworkshopStart, addworkshopSuccess,
    deleteworkshopFailure, deleteworkshopStart, deleteworkshopSuccess,
    updateworkshopFailure, updateworkshopStart, updateworkshopSuccess
} from './Redux/workshopSlice'
import { userRequest } from './RequestMethods'


export const createevent = async (dispatch, event) => {

    dispatch(addeventStart())
    try {
        const res = await userRequest.post('http://localhost:3001/api/events/', event)
        console.log(res);
        dispatch(addeventSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(addeventFailure())
    }


}

export const getevents = async (dispatch,) => {

    dispatch(geteventStart())
    try {
        const res = await userRequest.get('http://localhost:3001/api/events/',)
        console.log(res);
        dispatch(geteventSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(geteventFailure())
    }


}
export const updateevent = async (dispatch, id, event) => {

    dispatch(updateeventStart())
    try {
        const res = await userRequest.put(`http://localhost:3001/api/events/${id}`, event)
        console.log(res);
        dispatch(updateeventSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(updateeventFailure())
    }
}

export const deleteevent = async (dispatch, id) => {

    dispatch(deleteeventStart())
    try {
        const res = await userRequest.delete(`http://localhost:3001/api/events/${id}`,)
        console.log(res);
        dispatch(deleteeventSuccess(id))
    } catch (error) {
        console.log(error);
        dispatch(deleteeventFailure())
    }
}
export const createworkshop = async (dispatch, workshop) => {

    dispatch(addworkshopStart())
    try {
        const res = await userRequest.post('http://localhost:3001/api/workshops/', workshop)
        console.log(res);
        dispatch(addworkshopSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(addworkshopFailure())
    }


}
export const getworkshops = async (dispatch,) => {

    dispatch(getworkshopStart())
    try {
        const res = await userRequest.get('http://localhost:3001/api/workshops/',)
        console.log(res);
        dispatch(getworkshopSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(getworkshopFailure())
    }


}
export const updateworkshop = async (dispatch, id, workshop) => {

    dispatch(updateworkshopStart())
    try {
        const res = await userRequest.put(`http://localhost:3001/api/workshops/${id}`, workshop)
        console.log(res);
        dispatch(updateworkshopSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(updateworkshopFailure())
    }
}

export const deleteworkshop = async (dispatch, id) => {

    dispatch(deleteworkshopStart())
    try {
        const res = await userRequest.delete(`http://localhost:3001/api/workshops/${id}`)
        console.log(res);
        dispatch(deleteworkshopSuccess(id))
    } catch (error) {
        console.log(error);
        dispatch(deleteworkshopFailure())
    }
}