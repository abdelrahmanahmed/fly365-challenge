
import { createStore, applyMiddleware } from 'redux';
import thunkmiddleware from 'redux-thunk';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunkmiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
