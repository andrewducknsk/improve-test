import {createStore, compose} from 'redux';
import rootReducer from './reducers/index';

export default initialState =>
	createStore(
		rootReducer,
		initialState,
		compose(
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: f => f
		)
	);
