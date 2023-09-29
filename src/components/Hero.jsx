import React, { useContext } from 'react';
import { AppContext } from '../App';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

const Hero = ({ fetchData, searchLocation }) => {
  const { theme, language } = useContext(AppContext);

  return (
    <>
      <h1 className={theme === 'dark' ? 'dark-title' : 'light-title'}>
        {language === 'eng' ? 'Wheatter App' : 'Aplicacion del Clima'}
      </h1>
      
      <div>
        <label htmlFor='country'>
          {language === 'eng' ? 'Enter a Location' : 'Ingrese una ubicación'}
        </label>
        <input type='text' name='country' onChange={searchLocation} autoFocus />
        <button onClick={fetchData}>
          <FcSearch />
        </button>
      </div>
    </>
  );
};

Hero.propTypes = {
  fetchData: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};

export default Hero;
