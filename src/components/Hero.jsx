import React from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { useStore } from '../../store';

const Hero = ({ fetchData, searchLocation }) => {
  const { theme, language } = useStore();

  return (
    <>
      <h1 className={theme === 'dark' ? 'dark-hero-title' : 'light-hero-title'}>
        {language === 'eng' ? 'Wheatter App' : 'Aplicacion del Clima'}
      </h1>

      <div className='hero-form-section'>
        <label
          className='form-section-label'
          htmlFor='form-section-input'
        >
          {language === 'eng' ? 'Enter a Location :' : 'Ingrese una ubicación :'}
          <div className='form-section'>
            <input
              id='form-section-input'
              type='text'
              name='country'
              onChange={searchLocation}
              autoFocus
              autoComplete='country-name'
            />
            <button
              className='form-section-btn'
              onClick={fetchData}
            >
              <FcSearch />
            </button>
          </div>
        </label>
      </div>
    </>
  );
};

Hero.propTypes = {
  fetchData: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};

export default Hero;
