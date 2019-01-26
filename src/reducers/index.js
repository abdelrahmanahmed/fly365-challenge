import { combineReducers } from 'redux';

import hotels from './hotels.reducer';

const appReducer = combineReducers({
    hotels,
});

export default appReducer;
