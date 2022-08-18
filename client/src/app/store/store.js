import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';
import middleware from '../middleware';

const persistConfig = {
  key: 'root',
  //timeout: null,
  keyPrefix: '',
  storage: storage,
};

/* const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: ['authType'] // which reducer want to store
};
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware({
  onError: err => console.warn('Error@Saga: ', err.message),
});
export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware, ...middleware)),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
