import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { fetchMiddleware } from './middlewares';

const persistConfig = { key: 'root', storage: AsyncStorage, timeout: 10000 };

// creates the store
export default (rootReducer, rootSaga) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, fetchMiddleware];
  const enhancers = applyMiddleware(...middleware);

  const devtoolsConfig = { hostname: 'localhost', port: 8000, realtime: true };
  const appropriateCompose = __DEV__ ? composeWithDevTools(devtoolsConfig) : compose;

  const finalReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(finalReducer, appropriateCompose(...enhancers));
  const persistor = persistStore(store);
  const sagasManager = sagaMiddleware.run(rootSaga);

  return { store, persistor, sagasManager, sagaMiddleware };
};
