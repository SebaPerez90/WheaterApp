import React from 'react';
import PropTypes from 'prop-types';

const EspWeatherData = ({ weatherData }) => {
  if (!weatherData) return;

  return (
    <div>
      <h1>hola rey! aguante {weatherData.city}</h1>
    </div>
  );
};

EspWeatherData.propTypes = {
  weatherData: PropTypes.object,
};

export default EspWeatherData;
