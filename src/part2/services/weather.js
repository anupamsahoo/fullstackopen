import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/";
//weather?lat=28.6&lon=77.2&appid=5cd6f4468fdc7147449659ba8b67ea9c
const api_key = process.env.REACT_APP_API_KEY;
const getWeatherData = async (lat, lon) => {
  const request = await axios.get(
    baseUrl +
      "weather?units=metric&lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      api_key
  );
  const response = await request;
  console.log(response);
  return response.data;
};

export default { getWeatherData };
