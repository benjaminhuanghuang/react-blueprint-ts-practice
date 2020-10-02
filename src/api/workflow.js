import axios from "axios";
import apiConfig from "./config";

export const getJobs = async (token, filter) => {
  const config = {
    headers: { Authorization: `Bearer ${token.accessToken}` },
    params: {
      limit: 50,
      offset: 0,
      sortby: 'id',
      sortorder: 'DESC'
    }
  };
  const response = await axios.get(apiConfig.workflowApiUrl + "workflows", config);
  return response.data;
};
