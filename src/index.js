import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const loggerMiddleware = createLogger();

const axiosInstance = axios.create({
    baseURL: 'http://localhost:7001/api',
    headers: {'Content-Type': 'application/json'}
});
const store = createStore(
    rootReducer,composeWithDevTools(
	applyMiddleware(thunk.withExtraArgument(axiosInstance),loggerMiddleware)
  // other store enhancers if any
   )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
