import axios from "axios";
import { getApiHost } from "../constants/url";

const BASE_URL = getApiHost();

const post_query = async (endpoint, data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`${BASE_URL}${endpoint}`, data, config);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default post_query;
