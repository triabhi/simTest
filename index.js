/**
 * @format
 */
 import React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import createSagaMiddleware from 'redux-saga';
 import { createStore, applyMiddleware, compose } from 'redux';
 import { Provider } from 'react-redux';
 import reducer from './reducer/index';
 import rootSaga from './sagas/index';
 
 const sagaMiddleware = createSagaMiddleware();
 const store2 = compose(applyMiddleware(sagaMiddleware));
 
 export const store = createStore(reducer, store2);
 sagaMiddleware.run(rootSaga);
 
 const Apps = () => (
     <Provider store={store}>
       <App />
     </Provider>
   );
 
 AppRegistry.registerComponent(appName, () => Apps);