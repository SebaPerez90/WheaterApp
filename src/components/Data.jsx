import React from 'react';
import Hero from './Hero';

const Fetch = () => {
  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const fetchData = async () => {
    // prettier-ignore
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=berazategui&units=metric&appid=${APIkey}`); //chequear city query param para poder buscar dinamicamente una locacion
    const data = await response.json();
    console.log(data);

    //forecast data
    const city = data.city.name;
    const forecast = data.list[0].main;
    const probabilityOfPrecipitation = data.list[1].pop * 100;
    console.log(forecast);

    const weatherInfo = document.querySelector('.forecastData');
    // prettier-ignore
    weatherInfo.innerHTML = 
    `<div>
    <h3>${city}</h3>
    <p>Current Temperature ${forecast.temp.toFixed(1)}°C</p>
    <p>Humidity ${forecast.humidity}%</p>
    <p>Probability of Precipitation ${probabilityOfPrecipitation}%</p>
    </div>`;
  };

  return (
    <div>
      <Hero fetchData={fetchData} />
      <section className='forecastData'></section>
    </div>
  );
};

export default Fetch;
