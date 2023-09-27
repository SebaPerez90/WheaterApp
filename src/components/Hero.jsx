import React, { useContext } from 'react';
import { AppContext } from '../App';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

const Hero = ({ fetchData, searchLocation }) => {
  const { theme, language } = useContext(AppContext);

  return (
    <>
      <h1 className={theme === 'dark' ? 'dark-title' : 'light-title'}>
        {language === 'eng' ? 'Wheatter App' : 'Aplicacion del Clima'}
      </h1>
      <label htmlFor='country'>
        {language === 'eng' ? 'Enter a Location' : 'Ingrese una ubicación'}
      </label>
      <input type='text' name='country' onChange={searchLocation} autoFocus />
      <button onClick={fetchData}>
        <FcSearch />
      </button>
    </>
  );
};

Hero.propTypes = {
  fetchData: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};

export default Hero;
