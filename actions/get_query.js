import axios from "axios";
import { getApiHost } from "../constants/url";

const BASE_URL = getApiHost();

const get_query = async (endpoint) => {
  try {
    const res = await axios.get(BASE_URL + endpoint);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default get_query;
