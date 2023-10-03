import React from 'react';
import {
  FaLocationDot,
  FaTemperatureEmpty,
  FaTemperatureFull,
} from 'react-icons/fa6';
import { BsCloudRainFill } from 'react-icons/bs';
import { FaWind } from 'react-icons/fa';
import { IoWater } from 'react-icons/io5';
import { IoMdEye } from 'react-icons/io';
import PropTypes from 'prop-types';

const EngWeatherData = ({ weatherData }) => {
  if (!weatherData) return;

  return (
    <section className='weather-data-section'>
      <div className='img-background'></div>
      <div className='weather-data-location'>
        <FaLocationDot />
        <h2>{weatherData.city},</h2>
        <p>{weatherData.country}</p>
      </div>

      <div className='weather-data-current'>
        <p>Current Weather</p>
        <p>{weatherData.date}</p>
        <div className='data-current-main'>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.iconID}.png`}
            alt='Weather Icon'
          />
          <p>{weatherData.temperature}°C</p>
        </div>
        <p>Feels Like: {weatherData.temp_feels_like}°C</p>
        <p>{weatherData.main}</p>
        <p>{weatherData.main_description}</p>
        {/* <button className='weather-data-btn'>nexts days</button> */}
      </div>

      <div className='weather-aditional-data'>
        <div className='aditional-data-keys'>
          <p>
            max <FaTemperatureFull />
          </p>
          <p>
            min <FaTemperatureEmpty />
          </p>
          <p>
            hum <IoWater />
          </p>
          <p>
            wind <FaWind />
          </p>
          <p>
            vis <IoMdEye />
          </p>
          <p>
            pop <BsCloudRainFill />
          </p>
        </div>

        <div className='aditional-data-values'>
          <p>{weatherData.tempMax}°C</p>
          <p>{weatherData.tempMin}°C</p>
          <p>{weatherData.humidity}%</p>
          <p>{weatherData.wind_speed}km/h</p>
          <p>{weatherData.visibility}km</p>
          <p>{weatherData.pop}%</p>
        </div>
      </div>
    </section>
  );
};

EngWeatherData.propTypes = {
  weatherData: PropTypes.object,
};

export default EngWeatherData;
