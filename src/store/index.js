import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas';
import { routerMiddleware } from 'connected-react-router';

import createRootReducers from './reducers';
import 'regenerator-runtime/runtime';

export const history = createBrowserHistory({});

const makeStore = () => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
  });

  middleware.push(loggerMiddleware);

  middleware.push(routerMiddleware(history));

  const store = createStore(createRootReducers(history), applyMiddleware(...middleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default makeStore();
