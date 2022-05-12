import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} />
    <App />
  </React.StrictMode>
);

