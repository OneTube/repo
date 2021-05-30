import { createStore } from 'redux';

// Roots
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

// middeleware
import { enhancedStore, sagaMiddleware } from './middleware';

const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);

export default store;
