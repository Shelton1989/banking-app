import React from 'react'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../redux/actions/users'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let initialState = {}
const store = mockStore(initialState)

describe('redux actions', () => {
    const payload: any = {
        name: 'Test1',
        email: 'test@example.com',
    }
    const error = 'Failed to fetch user'

    const dispatchAction = async (dispatch: any, action: any, payload: any) => {
        dispatch(action(payload))
    }

    it('dispatches an action to set the state as loading', async () => {
        await dispatchAction(store.dispatch, actions.loading, true)
        const dispatchedActions = store.getActions()
        expect(dispatchedActions[0]).toEqual(actions.loading(true))
    })

    it('dispatches an action to set the user state', async () => {
        await dispatchAction(store.dispatch, actions.setUser, payload)
        const dispatchedActions = store.getActions()
        expect(dispatchedActions[1]).toEqual(actions.setUser(payload))
    })

    it('dispatches an action for a failed call', async () => {
        await dispatchAction(store.dispatch, actions.failedToSetUser, error)
        const dispatchedActions = store.getActions()
        expect(dispatchedActions[2]).toEqual(actions.failedToSetUser(error))
    })
})

