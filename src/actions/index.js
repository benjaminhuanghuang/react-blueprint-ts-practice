import axios from 'axios';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_USERS
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUserOldStyle({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        console.log("response", response);
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
      })
      .catch(err => {
        // If request is bad...
        // - Show an error to the user
        console.log(err);
        dispatch(authError('Bad Login Info'));
      });
  }
}
/*
  async-await need use 'babel-polyfill'
  Uncaught ReferenceError: regeneratorRuntime is not defined,
*/
export const signinUser = ({ email, password , callback}) => async dispatch => {
  try {
      const res = await axios.post(`${ROOT_URL}/signin`, { email, password });
      // - Update state to indicate user is authenticated
      dispatch({type: AUTH_USER});
      // - Save the JWT token
      localStorage.setItem('token', res.data.token);
      callback();
  }
  catch (err) {
      console.log(err);
      dispatch(authError('Bad Login Info'));
  }
}


export function signupUserOldStyle({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}
export const signupUser = ({ email, password, callback}) => async dispatch => {
  try {
      const response = await axios.post(`${ROOT_URL}/signup`, { email, password });
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      callback();;
  }
  catch (err) {
      console.log(err);
      dispatch(authError('Bad Login Info'));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      // Add token
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');
  
  return {
    type: FETCH_USERS,
    payload: request
  };
}