import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

export default createRootReducers;
