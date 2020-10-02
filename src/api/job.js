import axios from "axios";
import apiConfig from "./config";

export const getJobs = async (token, filter) => {
  // https://api-euw1.rms-npe.com/sml/auth/v1/Profile/signout
  // https://api-euw1.rms-npe.com/riskmodeler/v1/workflows?
  const config = {
    headers: { Authorization: `Bearer ${token.accessToken}` },
  };

  axios.get(apiConfig.authApiUrl + "workflows", null, config);
};
