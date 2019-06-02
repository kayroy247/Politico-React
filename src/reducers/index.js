import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  AuthReducer,
  loginReducer
});

export default rootReducer;
