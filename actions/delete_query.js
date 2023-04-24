import axios from "axios";
import { getApiHost } from "../constants/url";

const BASE_URL = getApiHost();

const delete_query = async (endpoint) => {
  try {
    const res = await axios.delete(BASE_URL + endpoint);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default delete_query;
