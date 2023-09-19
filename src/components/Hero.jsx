import React, { useContext } from 'react';
import { AppContext } from '../App';

const Hero = () => {
  const { theme, language } = useContext(AppContext);

  return (
    <div className={theme === 'dark' ? 'dark-title' : 'light-title'}>
      {language === 'eng' ? 'Wheatter App' : 'Aplicacion del Clima'}
    </div>
  );
};

export default Hero;
