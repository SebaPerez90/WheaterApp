import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import Hero from './Hero';

const ForecastData = () => {
  const { language } = useContext(AppContext);
  const [valueCapture, setValueCapture] = useState(''); //input value state
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';

    if (!valueCapture) return;

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`
      );

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      //forecast data state
      setWeatherData({
        city: data.city.name,
        pop: data.list[0].pop * 100,
        temperature: data.list[0].main.temp.toFixed(1),
        humidity: data.list[0].main.humidity,
        tempMax: data.list[0].main.temp_max.toFixed(1),
        tempMin: data.list[0].main.temp_min.toFixed(1),
      });
    } catch (error) {
      console.error(error);
    }
  };

  //this effect run if state language change.
  useEffect(() => {
    if (valueCapture) {
      fetchData();
    }
  }, [language]);

  return (
    <section>
      <Hero fetchData={fetchData} searchLocation={(e) => setValueCapture(e.target.value)} />
      {weatherData && language === 'eng' ? (
        <section>
          <h3>{weatherData.city}</h3>
          <p>Current temperature: {weatherData.temperature} °C</p>
          <p>Max temperature: {weatherData.tempMax} °C</p>
          <p>Min temperature: {weatherData.tempMin} °C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Probability of Precipitation: {weatherData.pop}%</p>
        </section>
      ) : (
        weatherData &&
        language === 'esp' && (
          <section>
            <h3>{weatherData.city}</h3>
            <p>Temperatura Actual: {weatherData.temperature} °C</p>
            <p>Temperatura Maxima: {weatherData.tempMax} °C</p>
            <p>Temperatura Minima: {weatherData.tempMin} °C</p>
            <p>Humedad: {weatherData.humidity}%</p>
            <p>Probabilidad de Lluvia: {weatherData.pop}%</p>
          </section>
        )
      )}
    </section>
  );
};

export default ForecastData;
