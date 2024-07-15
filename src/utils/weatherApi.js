// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude =32.78;
const longitude =-96.80;
const APIkey ='293c13dac2d1bb1b180986ed1f25ac8d';


export const getForcastWeather =() => {
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then((res) => {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    });
    return weatherApi;
};



export const parseWeatherData = (data) => {
    const main = data.main;
    const temperature = main && main.temp;
    const weather = {temperature: {F: Math.round(temperature), C: Math.round((temperature-32) * 5/9)}}
    return weather;
};

// weather.temperature.F =`${math.round(data.main.temp)}°F`;
// weather.temperature.C =`${math.round((data.main.temp-32) * 5/9)}°C`;