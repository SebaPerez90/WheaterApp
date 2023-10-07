import React from 'react';
import { useStore } from '../../store';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import esp from '../assets/esp.png';
import eng from '../assets/eng.png';

const Header = () => {
  const { themeDark, toggleTheme, languageEng, toggleLanguage } = useStore();

  return (
    <header className={themeDark ? 'header-dark-theme' : 'header-light-theme'}>
      <button
        onClick={toggleTheme}
        className={themeDark ? 'darkThemeBtn' : 'lightThemeBtn'}
      >
        {themeDark ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <button
        onClick={toggleLanguage}
        className='languageBtn'
      >
        {languageEng ? (
          <img
            src={esp}
            alt='icono-referencia-español'
            className='EspLangRefImg'
          />
        ) : (
          <img
            src={eng}
            alt='reference-icon-english'
            className='EngLangRefImg'
          />
        )}
      </button>
    </header>
  );
};

export default Header;
