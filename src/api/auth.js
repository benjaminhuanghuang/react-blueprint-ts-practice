
import axios from 'axios';
import apiConfig from './config';

export const signup = async ({ firstName, lastName, email, password }) => {

  const user = {}
  return user;
};

export const logout = () => {
  // https://api-euw1.rms-npe.com/sml/auth/v1/Profile/signout
  axios.post(apiConfig.authApiUrl + 'Profile/signout');
};

export const login = async ({ email, password }) => {
  const body = {
    username:"benjamin.huang@rms.com",
    password:"Password@1234",
    tenantName: "rlax-qe-eu"
  };

  const response = await axios.post(apiConfig.authApiUrl + '/login/implicit', body)
   
  console.log(response)
  // accessToken, 
  const user_auth = response.data;
  return user_auth;
};
