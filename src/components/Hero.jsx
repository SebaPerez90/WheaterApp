import React, { useContext } from 'react';
import { AppContext } from '../App';
import PropTypes from 'prop-types';

const Hero = ({ fetchData, searchLocation }) => {
  const { theme, language } = useContext(AppContext);

  return (
    <div>
      <h1 className={theme === 'dark' ? 'dark-title' : 'light-title'}>
        {language === 'eng' ? 'Wheatter App' : 'Aplicacion del Clima'}
      </h1>
      <label htmlFor='country'>Enter a location</label>
      <input type='text' name='country' onChange={searchLocation} autoFocus/>
      <button onClick={fetchData}>Search</button>
    </div>
  );
};

Hero.propTypes = {
  fetchData: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};

export default Hero;
