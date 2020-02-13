import React from 'react';
import createStore from '@/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppNavigator from './navigation/index';
import './config/reactotronConfig';

// const { store, persistor } = createStore();

// export { store };
export const AppNavigatorRef = React.createRef();

export default () => (
  // <Provider store={store}>
  //   <PersistGate persistor={persistor}>
  <AppNavigator ref={AppNavigatorRef} />
  //   </PersistGate>
  // </Provider>
);
