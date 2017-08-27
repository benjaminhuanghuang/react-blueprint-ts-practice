import { combineReducers } from 'redux';
//
import authReducer from './authReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  authenticated: authReducer,
  users: userReducer
});

export default rootReducer;