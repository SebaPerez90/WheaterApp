import React from 'react';
// import { FaLocationDot, FaTemperatureEmpty, FaTemperatureFull } from 'react-icons/fa6';
// import { BsCloudRainFill } from 'react-icons/bs';
// import { FaWind } from 'react-icons/fa';
// import { IoWater } from 'react-icons/io5';
// import { IoMdEye } from 'react-icons/io';
// import BackgroundImg from './BackgroundImg.jsx';
import { useStore } from '../../store.js';

export default function SpanishCardInfo() {
  const { weatherData } = useStore();

  if (!weatherData.city) return;

  return (
    <div>
      <h1>spanish componente</h1>
    </div>
  );
}
