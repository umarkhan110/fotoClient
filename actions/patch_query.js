import axios from "axios";
import { getApiHost } from "../constants/url";

const BASE_URL = getApiHost();

const patch_query = async (endpoint, data, id) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(`${BASE_URL}${endpoint}${id}/`, data, config);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default patch_query;
