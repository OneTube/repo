import type { IEmployee } from '../types';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { SELECTED_EMPLOYEES_KEY } from '../constants/app-constants';
import { E_EMPLOYEES } from './employees/types';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = devtools ? devtools : compose;

// @ts-ignore
const localStorageMiddleware: SagaMiddleware = ({ getState }: any) => {
    return (next: any) => (action: any) => {
        const result = next(action);
        const isSelectAction = [E_EMPLOYEES.FILL_SELECT_EMPLOYEES, E_EMPLOYEES.SELECT_EMPLOYEE, E_EMPLOYEES.UNSELECT_EMPLOYEE].includes(result.type);

        if (isSelectAction) {
            const mapIds = getState().employees.selected.map((item: IEmployee) => item.id);
            window.localStorage.setItem(SELECTED_EMPLOYEES_KEY, JSON.stringify(mapIds))
        }
        return result;
    };
};

const middleware: Array<SagaMiddleware> = [sagaMiddleware, localStorageMiddleware];

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };
