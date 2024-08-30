import { processResponse } from "./apiHelpers.js";
export const getWeather = ({ latitude, longitude }, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(processResponse);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: data.main.temp,
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  result.isDay = isDay(data.sys);
  result.condition = data.weather[0].main.toLowerCase();

  return result;
};

const isDay = ({ sunrise, sunset }) => {
  return sunrise * 1000 < Date.now() && Date.now() > sunset;
};

export const getWeatherType = (temperature) => {
  if (temperature > 82) {
    return "hot";
  } else if (temperature >= 70 && temperature < 82) {
    return "warm";
  } else if (temperature >= 58 && temperature < 70) {
    return "chilly";
  } else {
    return "cold";
  }
};
