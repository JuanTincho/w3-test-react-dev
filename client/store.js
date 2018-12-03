import { applyMiddleware, createStore } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';
import homeSaga from './components/Home/saga';

const sagaMiddleware = createSagaMiddleware();

const storeInitialState = {};
const store = createStore(
  reducers,
  fromJS(storeInitialState),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(homeSaga);

export default store;
