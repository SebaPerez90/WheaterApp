import React from 'react';
import { useStore } from '../../store';

const Footer = () => {
  const { weatherData, setWeatherData } = useStore();

  return (
    <div>
      <button onClick={setWeatherData}>log fn</button>
      <button onClick={() => console.log(weatherData)}>log obj</button>
      <h1>asd</h1>
    </div>
  );
};

export default Footer;
