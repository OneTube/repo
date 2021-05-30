---
to: "<% return path + 'saga/index.ts'%>"
---
import { takeEvery, all, call } from 'redux-saga/effects';

import { E_<%= upperName %> } from '../types';

import { fetch<%= pascalName %> } from './workers/fetch-<%= kebabName %>';

export function* watchFetch<%= pascalName %> () {
    yield takeEvery(E_<%= upperName %>.FETCH_<%= upperName %>_ASYNC, fetch<%= pascalName %>)
}

export function* watch<%= pascalName %> () {
    yield all([
        call(watchFetch<%= pascalName %>),
    ]);
}
