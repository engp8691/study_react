import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import countReducer from './store/reducer/countReducer';

const store = createStore(countReducer, applyMiddleware(thunk));

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
