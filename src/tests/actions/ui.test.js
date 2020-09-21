import { setErrorAction, removeError, startLoading, finishLoading } from '../../actions/ui';
import { types } from '../../types/types';



describe('Pruebas en ui-actions', () => {

    test('todas las acciones deben de funcionar', () => {

        const action = setErrorAction('HELP!!!!');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'HELP!!!!'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();


        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });


    })


})
