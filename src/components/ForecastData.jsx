import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import Hero from './Hero.jsx';
import EngWeatherData from './EngWeatherData.jsx';
import EspWeatherData from './EspWeatherData.jsx';

const ForecastData = () => {
  const { language } = useContext(AppContext);
  const [valueCapture, setValueCapture] = useState(''); //input value state
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';

    if (!valueCapture) alert('llena el campo rey');

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`
      );

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);

      //forecast data state
      setWeatherData({
        city: data.city.name,
        country: data.city.country,
        pop: data.list[0].pop * 100,
        temperature: data.list[0].main.temp.toFixed(1),
        temp_feels_like: data.list[0].main.feels_like.toFixed(1),
        humidity: data.list[0].main.humidity,
        tempMax: data.list[0].main.temp_max.toFixed(1),
        tempMin: data.list[0].main.temp_min.toFixed(1),
        iconID: data.list[0].weather[0].icon,
        main: data.list[0].weather[0].main,
        main_description: data.list[0].weather[0].description,
        wind_speed: (data.list[0].wind.speed * 3.6).toFixed(1),
        date: data.list[0].dt_txt.slice(0, 10),
        visibility: data.list[0].visibility / 1000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  //this effect run if the language state change.
  useEffect(() => {
    if (valueCapture) {
      fetchData();
      console.log(localStorage);
    }
  }, [language]);

  return (
    <section>
      <Hero
        fetchData={fetchData}
        searchLocation={(e) => setValueCapture(e.target.value)}
      />
      {language === 'eng' ? (
        <EngWeatherData weatherData={weatherData} />
      ) : (
        <EspWeatherData weatherData={weatherData} />
      )}
    </section>
  );
};

export default ForecastData;
