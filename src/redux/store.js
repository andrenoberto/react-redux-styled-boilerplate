import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const configureStore = preloadedStore => {
  const middlewares = [routerMiddleware(history), thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const composedEnhanchers = compose(
    ...enhancers,
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose,
  );
  const store = createStore(
    rootReducer(history),
    preloadedStore,
    composedEnhanchers,
  );

  return store;
};

export const store = configureStore();
