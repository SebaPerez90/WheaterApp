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

      <div className='hero-form-section'>
        <label className='form-section-label' htmlFor='country'>
          {language === 'eng'
            ? 'Enter a Location :'
            : 'Ingrese una ubicación :'}
        </label>
        <div className='form-section'>
          <input
          className='form-section-input'
            type='text'
            name='country'
            onChange={searchLocation}
            autoFocus
          />
          <button className='form-section-btn' onClick={fetchData}>
            <FcSearch />
          </button>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  fetchData: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};

export default Hero;
