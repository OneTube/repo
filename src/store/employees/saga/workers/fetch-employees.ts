import { put, apply } from 'redux-saga/effects';

import { getEmployeesList } from '../../../../api/employees';
import { employeesActions } from '../../actions';

export function* fetchEmployees(payload: ReturnType<any>){
    try {
        // @ts-ignore
        const data = yield apply( null, getEmployeesList, [] );

        yield put(employeesActions.fillEmployees( data ));
        yield put(employeesActions.fillSelectEmployees());

    } catch (error) {

    } finally {

    }
}
