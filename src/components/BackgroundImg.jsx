import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';

const fetchImg = async () => {
  const resp = await fetch('http://localhost:5173/weatherData-db.json');

  if (!resp.ok) throw new Error('something goes wrong');

  const data = await resp.json();

  return data.weatherData;
};

const BackgroundImg = ({ weatherData }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['weatherData'],
    queryFn: fetchImg,
  });

  if (isLoading) return <span>loading ...</span>;

  if (error) return <span>error : {error.message}</span>;

  const imagesObj = data[data.length - 1];

  const renderingImg = (iconID) => {
    console.log(weatherData);
    switch (iconID) {
      case '01d':
        return (
          <img
            src={imagesObj.d01}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '02d':
        return (
          <img
            src={imagesObj.d02}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '03d':
        return (
          <img
            src={imagesObj.d03}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '04d':
        return (
          <img
            src={imagesObj.d04}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '09d':
        return (
          <img
            src={imagesObj.d09}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '10d':
        return (
          <img
            src={imagesObj.d10}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '11d':
        return (
          <img
            src={imagesObj.d11}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '13d':
        return (
          <img
            src={imagesObj.d13}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '50d':
        return (
          <img
            src={imagesObj.d50}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '01n':
        return (
          <img
            src={imagesObj.n01}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '02n':
        return (
          <img
            src={imagesObj.n02}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '03n':
        return (
          <img
            src={imagesObj.n03}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '04n':
        return (
          <img
            src={imagesObj.n04}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '09n':
        return (
          <img
            src={imagesObj.n09}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '10n':
        return (
          <img
            src={imagesObj.n10}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '11n':
        return (
          <img
            src={imagesObj.n11}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '13n':
        return (
          <img
            src={imagesObj.n13}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );

      case '50n':
        return (
          <img
            src={imagesObj.n50}
            alt={weatherData.main}
            className='backgroundImg'
          />
        );
    }
  };

  return <div className='backgroundImg-container'>{renderingImg(weatherData.iconID)}</div>;
};
BackgroundImg.propTypes = {
  weatherData: PropTypes.object,
};
export default BackgroundImg;
