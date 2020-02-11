import { combineReducers } from 'redux';
import rootSaga from '@/sagas';
import configureStore from './configureStore';

export const reducers = combineReducers({
  user: require('./UserRedux').default,
  auth: require('./AuthRedux').default,
});

export default () => {
  // eslint-disable-next-line
  let { store, persistor, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(reducers);
      const newYieldedSagas = require('@/sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => sagasManager = sagaMiddleware.run(newYieldedSagas));
    });
  }

  return { store, persistor };
};
