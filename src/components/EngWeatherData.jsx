import React from 'react';
import PropTypes from 'prop-types';

const EngWeatherData = ({ weatherData }) => {
  if (!weatherData) return;

  return (
    <div>
      <h1>hey bro {weatherData.city}</h1>
    </div>
  );
};

EngWeatherData.propTypes = {
  weatherData: PropTypes.object,
};

export default EngWeatherData;
