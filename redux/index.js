import { combineReducers } from 'redux';
import NavReducer from './navegation/nav.Reducer';

const rootReducer = combineReducers({
  nav: NavReducer,
});

export default rootReducer;
