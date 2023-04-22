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
  const WeatherIcon = () => {
    const wData = getWather.weather[0].description;
    console.log(wData);
    let wIcon = "https://openweathermap.org/img/wn/";
    if (wData === "clear sky") {
      wIcon += "01n@2x.png";
    } else if (wData === "few clouds") {
      wIcon += "02n@2x.png";
    } else if (wData === "scattered clouds") {
      wIcon += "03n@2x.png";
    } else if (wData === "broken clouds") {
      wIcon += "04n@2x.png";
    } else if (wData === "shower rain") {
      wIcon += "09n@2x.png";
    } else if (wData === "rain") {
      wIcon += "10n@2x.png";
    } else if (wData === "thunderstorm") {
      wIcon += "11n@2x.png";
    } else if (wData === "snow") {
      wIcon += "13n@2x.png";
    } else if (wData === "mist") {
      wIcon += "50n@2x.png";
    } else {
      wIcon += "01n@2x.png";
    }
    console.log(wIcon);
    return (
      <>
        <img src={wIcon} />
      </>
    );
  };
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
      <WeatherIcon />
      <p>Wind: {getWather.wind.speed} m/s</p>
    </>
  );
};
export default ShowCountry;
