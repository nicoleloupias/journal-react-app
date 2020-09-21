import { authReducer } from './../../reducers/authReducer';
import { types } from './../../types/types';
describe('pruebas en authReducer', () => {

    test('debe de realizar el login', () => {
        const initState = {}
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Nicole'
            }
        }
        const state = authReducer(initState, action)
        expect( state ).toEqual({
            uid: 'abc',
            name: 'Nicole'
        })
    })

    test('debe de realizar el logout', () => {
        const initState = {
            uid: 'sdfsdajskdh123',
            name: 'Nicole'
        }
        const action = {
            type: types.logout,
            payload: {
                uid: 'abc',
                displayName: 'Nicole'
            }
        }
        const state = authReducer(initState, action)
        expect( state ).toEqual({})
    })

    test('no debe hacer cambios en el state', () => {
        const initState = {
            uid: 'sdfsdajskdh123',
            name: 'Nicole'
        }
        const action = {
            type: 'random'
        }
        const state = authReducer(initState, action)
        expect( state ).toEqual(initState)
    })
})
