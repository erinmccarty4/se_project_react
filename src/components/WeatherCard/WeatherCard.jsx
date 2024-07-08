import "./weatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let thisWeatherOption;
  if (!weatherOption) {
    thisWeatherOption =
      defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    thisWeatherOption = weatherOption;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg;</p>
      <img
        src={thisWeatherOption?.url}
        alt={thisWeatherOption?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
