import { processResponse } from "./apiHelpers.js";

// Define the request function
function request(url, options) {
  return fetch(url, options).then(processResponse);
}

export const getWeather = ({ latitude, longitude, APIkey }) => {
  return request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
    {}
  );
};

// (Rest of the weatherApi.js code remains unchanged)
export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 80) return "hot";
  if (temperature > 65) return "warm";
  if (temperature > 50) return "cool";
  return "cold";
};
