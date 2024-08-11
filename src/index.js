import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from './reducers/rootRerducer';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as  createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhacers = composeAlt(applyMiddleware(thunk, logger))

const store = createStore(
  rootReducer,
  composeEnhacers
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


