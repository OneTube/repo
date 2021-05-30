import { takeEvery, all, call } from 'redux-saga/effects';

import { E_EMPLOYEES } from '../types';

import { fetchEmployees } from './workers/fetch-employees';

export function* watchFetchEmployees () {
    yield takeEvery(E_EMPLOYEES.FETCH_EMPLOYEES_ASYNC, fetchEmployees)
}

export function* watchEmployees () {
    yield all([
        call(watchFetchEmployees),
    ]);
}
