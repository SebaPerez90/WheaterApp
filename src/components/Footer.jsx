import React from 'react';
import { useStore } from '../../store';

const Footer = () => {
  const { weatherData, setWeatherData, valueCapture, setValueCapture } = useStore();

  return (
    <div>
      <button onClick={setWeatherData}>log fn</button>
      <button onClick={() => console.log(weatherData)}>log obj</button>
      <h1>value :{valueCapture}</h1>
      <input
        type='text'
        name=''
        id=''
        onChange={setValueCapture}
      />
    </div>
  );
};

export default Footer;
