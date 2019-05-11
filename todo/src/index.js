import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Raven from 'react-raven';
import App from './components/App'
import rootReducer from './reducers'

const logger = store => next => action=>{
	console.group(action.type);
	console.log('dispatching', action);

	let result = next(action);

	console.log('next state', store.getState());
	console.groupEnd();

	return result;
};

const crashReport = store => next => action => {
	try{
		return next(action);
	}catch(err){
		console.log('Caught an exception', err);

		Raven.captureException(err, {
			extra: {
				action,
				state: store.getState()
			}
		});

		throw err
	}
}

const store = createStore(rootReducer, applyMiddleware(
	logger,
	crashReport
));

render(
	(<Provider store={store}>
		<Router>
			<Route path="/:filter?" component={App} />
		</Router>
	</Provider>),

	document.getElementById('root')
)
