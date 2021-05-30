---
to: "<% return path + 'saga/workers/fetch-' + kebabName + '.ts'%>"
---
import { put, apply } from 'redux-saga/effects';

import { API } from "../../../../utils/services/api-service";
import { <%= lowerName %>Actions } from '../../actions';

export function* fetch<%= pascalName %>(payload: ReturnType<any>){
    try {
        const data = yield apply( API, API.fn, [] );

        yield put(<%= lowerName %>Actions.fill<%= pascalName %>( data ));

    } catch (error) {

    } finally {

    }
}
