import React from 'react';
import PropTypes from 'prop-types';

const EngWeatherData = ({ weatherData }) => {
  if (!weatherData) return;

  return (
    <section>
      <h3>{weatherData.city}</h3>
      <p>{weatherData.country}</p>
      <p>{weatherData.main}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.iconID}.png`}
        alt='Weather Icon'
      />
      <p>{weatherData.main_description}</p>
      <p>Current temperature: {weatherData.temperature} °C</p>
      <p>Max temperature: {weatherData.tempMax} °C</p>
      <p>Min temperature: {weatherData.tempMin} °C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.wind_speed}km/h</p>
      <p>Visibility: {weatherData.visibility}km</p>
      <p>Date: {weatherData.date}</p>
    </section>
  );
};

EngWeatherData.propTypes = {
  weatherData: PropTypes.object,
};

export default EngWeatherData;
