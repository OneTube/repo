// Core
import { all, call } from 'redux-saga/effects';

// Watcher
import { watchEmployees } from './employees/saga';

export function* rootSaga() {
    yield all([ call(watchEmployees) ]);
}
