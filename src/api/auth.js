
import axios from 'axios';
import apiConfig from './config';

export const signup = async ({ firstName, lastName, email, password }) => {

  const user = {}
  return user;
};

export const logout = (token) => {
  // https://api-euw1.rms-npe.com/sml/auth/v1/Profile/signout
  const config = {
    headers: { Authorization: `Bearer ${token.accessToken}` }
  };
  axios.post(apiConfig.authApiUrl + 'Profile/signout', null, config);
};

export const login = async ({ email, password }) => {
  const body = {
    username:"benjamin.huang@rms.com",
    password:"Password@1234",
    tenantName: "rlax-qe-eu"
  };

  const response = await axios.post(apiConfig.authApiUrl + '/login/implicit', body)
   

  // accessToken, 
  return response.data;
};
