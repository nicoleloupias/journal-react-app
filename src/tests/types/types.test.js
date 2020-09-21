import { types } from './../../types/types';
describe('prueba con nuestros tipos', () => {

    test('debe de tener estos tipos', () => {
        expect( types ).toEqual( {
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set error',
            uiRemoveError: '[UI] Remove error',
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New Note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated note saved',
            notesFileUrl: '[Notes] Updated image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        })
    })

})
