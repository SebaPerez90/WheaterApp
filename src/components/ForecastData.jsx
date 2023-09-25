import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import Hero from './Hero';

const ForecastData = () => {
  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const [valueCapture, setValueCapture] = useState(); //input value state
  const { language } = useContext(AppContext);

  const fetchData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`
    );
    const data = await response.json();
    // console.log(data);

    //forecast data
    const city = data.city.name;
    const pop = data.list[0].pop * 100;
    const temperature = data.list[0].main.temp;
    const humidity = data.list[0].main.humidity;
    const tempMax = data.list[0].main.temp_max;
    const tempMin = data.list[0].main.temp_min;

    if (language === 'eng') {
      const weatherInfo = document.querySelector('.forecastDataEng');
      weatherInfo.innerHTML =
        // prettier-ignore
        `<div>
        <h3>${city}</h3>
        <p>Current temperature: ${temperature.toFixed(1)} °C</p>
        <p>Max temperature: ${tempMax.toFixed(1)} °C</p>
        <p>Min temperature: ${tempMin.toFixed(1)} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Probability of Precipitation: ${pop}%</p>
      </div>`;
    } else {
      const weatherInfo = document.querySelector('.forecastDataEsp');
      weatherInfo.innerHTML =
        // prettier-ignore
        `<div>
        <h3>${city}</h3>
        <p>Temperatura Actual: ${temperature.toFixed(1)} °C</p>
        <p>Temperatura Maxima: ${tempMax.toFixed(1)} °C</p>
        <p>Temperatura Minima: ${tempMin.toFixed(1)} °C</p>
        <p>Humedad: ${humidity}%</p>
        <p>Probabilidad de Lluvia: ${pop}%</p>
      </div>`;
    }
  };

  //this effect run if state language change.
  useEffect(() => {
    fetchData();
  }, [language]);

  return (
    <div>
      <Hero
        fetchData={fetchData}
        searchLocation={(e) => setValueCapture(e.target.value)}
      />
      {language === 'eng' ? (
        <section className='forecastDataEng'></section>
      ) : (
        <section className='forecastDataEsp'></section>
      )}
    </div>
  );
};

export default ForecastData;
