import { tradeReducer } from './tradeReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    tradeReducer
});

export default allReducers;