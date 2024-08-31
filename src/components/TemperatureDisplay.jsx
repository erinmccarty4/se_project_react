import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function TemperatureDisplay() {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperatureInCelsius = 14; // Example temperature in Celsius
  const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;

  return (
    <div>
      {currentTemperatureUnit === "F"
        ? `${temperatureInFahrenheit.toFixed(1)} °F`
        : `${temperatureInCelsius.toFixed(1)} °C`}
    </div>
  );
}

export default TemperatureDisplay;
