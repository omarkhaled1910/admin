import axios from 'axios'
import { loginError, loginStart, loginSuccess } from './Redux/userSlice'
import {
    getProductStart, getProductSuccess, getProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure,
    addProductStart, addProductSuccess, addProductFailure,
    deleteProductFailure, deleteProductStart, deleteProductSuccess
} from './Redux/productSlice'
import {
    getusersFailure, getusersStart, getusersSuccess,
    updateuserFailure, updateuserStart, updateuserSuccess,
    deleteuserFailure, deleteuserStart, deleteuserSuccess,
    adduserFailure, adduserStart, adduserSuccess
} from './Redux/allusersSlice'
import { userRequest } from './RequestMethods'

export const login = async (dispatch, user) => {

    dispatch(loginStart())
    try {
        const res = await axios.post('http://localhost:3001/api/auth/login', user)

        dispatch(loginSuccess(res.data))
        localStorage.setItem('accessToken', String(res.data.accessToken))

    } catch (error) {
        console.log(error);
        dispatch(loginError())
    }


}

export const getusers = async (dispatch,) => {

    dispatch(getusersStart())
    try {
        const res = await userRequest.get('users/',)
        console.log(res.data);
        dispatch(getusersSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(getusersFailure())
    }
}
export const adduser = async (dispatch, product) => {

    dispatch(adduserStart())
    try {
        const res = await userRequest.post('users/', product)
        console.log(res);
        dispatch(adduserSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(adduserFailure())
    }
}

export const updateuser = async (dispatch, id, user) => {

    dispatch(updateuserStart())
    try {
        const res = await userRequest.put(`users/${id}`, user)
        console.log(res.data);
        dispatch(updateuserSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(updateuserFailure())
    }
}

export const deleteuser = async (dispatch, id) => {

    dispatch(deleteuserStart())
    console.log(id);
    try {
        const res = await userRequest.delete(`users/${id}`)
        console.log(res);
        dispatch(deleteuserSuccess({ id, msg: res.data }))
    } catch (error) {
        console.log(error);
        dispatch(deleteuserFailure())
    }
}


export const getproducts = async (dispatch,) => {

    dispatch(getProductStart())
    try {
        const res = await axios.get('http://localhost:3001/api/products/',)
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(getProductFailure())
    }


}
export const addproduct = async (dispatch, product) => {

    dispatch(addProductStart())
    try {
        const res = await userRequest.post('products', product)
        console.log(res);
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(addProductFailure())
    }
}

export const updateproduct = async (dispatch, id, product) => {

    dispatch(updateProductStart())
    try {
        const res = await userRequest.put(`products/${id}`, product)
        console.log(res);
        dispatch(updateProductSuccess(res.data))
    } catch (error) {
        console.log(error);
        dispatch(updateProductFailure())
    }
}

export const deleteproduct = async (dispatch, id) => {

    dispatch(deleteProductStart())
    console.log(id);
    try {
        const res = await userRequest.delete(`products/${id}`)
        console.log(res);
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        console.log(error);
        dispatch(deleteProductFailure())
    }
}
