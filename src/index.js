import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from "redux-saga";
import { CookiesProvider } from 'react-cookie';
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers';
import rootSaga from './sagas/sagas';

import './index.css';
import "./assets/styles/sb-admin-2.css";
import App from './App';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);

// run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<CookiesProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</CookiesProvider>,
	document.getElementById('root')
);
