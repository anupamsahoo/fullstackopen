import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1";
const getAll = async () => {
  const request = axios.get(baseUrl + "/all");
  const response = await request;
  return response.data;
};

export default { getAll };
