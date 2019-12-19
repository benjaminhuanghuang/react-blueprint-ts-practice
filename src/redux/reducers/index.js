import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { singup } from './signup.reducer';

const rootReducer = combineReducers({
  auth,
  singup,
 });

export default rootReducer;