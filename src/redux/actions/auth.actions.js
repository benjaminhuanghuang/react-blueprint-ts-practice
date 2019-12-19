import axios from 'axios';
import config from './config';

import { returnErrors } from './error.actions';

export const signup = ({username, password}) => dispatch => {
  const body = JSON.stringify({username, password});
  const config = {
    headers:{
      "Content-type": "application/json"
    }
  }
  axios.post("api/user", body, config)
  .then(res =>{
    dispatch({
      type: 'SIGNUP_SUCCESS'
    })
  })
}

export const login = ({ username, password }) => dispatch => {
  const body = JSON.stringify({
    username,
    password,
    grantType: "password",
    clientName: "RLaX",
  });

  const config = {
    headers:{
      "Content-type": "application/json"
    }
  }
  axios.post(config.authApiUrl + 'token', body, config)
  .then(res =>{
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data
    })
  })
  .catch(err=>{
    dispatch(returnErrors(err.response.data, err.response.status, 'Login failed'))
    dispatch({
      type: 'LOGIN_FAILED'
    })
  });
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: 'USER_LOADING' });
  const config = tokenConfig(getState)
  axios.get(config.authApiUrl + 'user', config)
    .then(res => dispatch({
      type: 'USER_LOADED',
      paylod: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: 'AUTH_ERROR' })
    });
}


const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }
  if (token) {
    config.headers['Authorization'] = "Bearer " + token;
  }
  return config;
}