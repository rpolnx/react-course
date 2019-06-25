import { clickReducer } from './clickReducer';
import { timeReducer } from './timeReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: clickReducer,
    timeState: timeReducer
});