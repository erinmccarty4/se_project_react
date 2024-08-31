// import React from "react";

// const CurrentTemperatureUnitContext = React.createContext({
//   CurrentTemperatureUnit: "",
//   handleToggleSwitchChange: () => {},
// });

// export default CurrentTemperatureUnitContext;

import React, { createContext, useState } from "react";

export const CurrentTemperatureUnitContext = createContext();

export const CurrentTemperatureUnitProvider = ({ children }) => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      {children}
    </CurrentTemperatureUnitContext.Provider>
  );
};
