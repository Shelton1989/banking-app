import * as types from '../types/userTypes'
import api from '../../services/api'

import {
    Action
} from 'redux'
import {
    ThunkAction
} from 'redux-thunk'

// Actions
export const fetchUser = (id: String): ThunkAction<any, any, any, Action> => {
    return dispatch => {
        dispatch(loading(true))
        api.get(`users/${id}`).then((res: any) => {
            dispatch(setUser(res.data))
        })
        .catch((err: any) => {
            let error = err.response.data.message
            dispatch(failedToSetUser(error))
        })
    }
}

// Mutations
type mutation = (payload: any) => types.ActionTypes

const setUser: mutation = (payload: types.User) => {
    return {
        type: types.SET_USER,
        payload: payload,
        loading: false
    }
}

const failedToSetUser: mutation = (payload: String) => {
    return {
        type: types.FAILED_TO_SET_USER,
        payload: {
            error: payload,
            loading: false
        }
    }
}

const loading: mutation = (payload: Boolean) => {
    return {
        type: types.LOADING,
        payload: {
            loading: payload
        }
    }
}