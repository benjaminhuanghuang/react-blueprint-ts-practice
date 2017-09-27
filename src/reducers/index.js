import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
//
import AuthReducer from './AuthReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  users: userReducer
});

export default rootReducer;