import * as types from '../types/userTypes'

const initialState: types.UserState = {
    user: {
        name: '',
        email: ''
    }
}

const UserReducer: any = (
    state: types.UserState = initialState, 
    action: types.ActionTypes) => {
        const {type, payload} = action
        switch (type) {
            case types.SET_USER:
                return {
                    ...state,
                    user: {...payload}
                }
            case types.FAILED_TO_SET_USER:
                return {
                    ...state,
                    ...payload
                }
            case types.LOADING:
                return {
                    ...state,
                    ...payload
                }
            default:
                return state
        }

}

export default UserReducer
