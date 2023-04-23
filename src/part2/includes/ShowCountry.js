import { useEffect, useState } from "react";
import WeatherService from "../services/weather";
const ShowCountry = ({ country }) => {
  const [getWather, setWeather] = useState(null);
  const languages = country.languages ? Object.values(country.languages) : "";

  useEffect(() => {
    WeatherService.getWeatherData(
      country.capitalInfo.latlng[0],
      country.capitalInfo.latlng[1]
    ).then((response) => {
      console.log(response);
      setWeather(response);
    });
  }, []);

  if (!getWather) {
    return null;
  }

  const icon = getWather.weather[0].icon;
  const wIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <p>Languages</p>
      <ul>
        {languages.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      <h2>Capital: {country.capital}</h2>
      <p>Lat: {country.capitalInfo.latlng[0]}</p>
      <p>Lng: {country.capitalInfo.latlng[1]}</p>
      <h2>{country.capital} Weather Info</h2>
      <p>Temperature: {getWather.main.temp} Celcious</p>
      <img src={wIcon} />
      <p>Wind: {getWather.wind.speed} m/s</p>
    </>
  );
};
export default ShowCountry;
