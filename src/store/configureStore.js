import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, reduxImmutableStateInvariant()) //enhancing store with middleware (optional)
		// check out react slingshot middleware github to check how to set up other cool features
	);
}
