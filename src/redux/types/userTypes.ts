// Contants
export const SET_USER = ''
export const FAILED_TO_SET_USER = ''
export const LOADING = ''

// Reducer Types
export interface GeolocationObject {
    lat: String,
    long: String
}

export interface AddressObject {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: GeolocationObject
}

export interface CompanyObject {
    name: String,
    catchPhrase: String,
    bs: String
}

export interface User {
    id?: Number,
    name: String,
    username?: String,
    email: String,
    address?: AddressObject,
    phone?: String,
    website?: String,
    company?: CompanyObject
}

export interface UserState {
    user: User
}

// Mutation types
interface SetUserMutation {
    type: typeof SET_USER,
    payload: User
}

interface FailedToSetUserMutation {
    type: typeof FAILED_TO_SET_USER,
    payload: {
        error: String
    }
}

interface LoadingMutation {
    type: typeof LOADING,
    payload: {
        loading: Boolean
    }
}

// Composed types
export type ActionTypes = SetUserMutation | 
    FailedToSetUserMutation | 
    LoadingMutation