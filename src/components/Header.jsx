import React from 'react';
import { useStore } from '../../store';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import esp from '../assets/esp.png';
import eng from '../assets/eng.png';

const Header = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useStore();

  return (
    <header
      className={theme === 'dark' ? 'header-dark-theme' : 'header-light-theme'}
    >
      <button
        onClick={toggleTheme}
        className={theme === 'dark' ? 'darkThemeBtn' : 'lightThemeBtn'}
      >
        {theme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <button onClick={toggleLanguage} className='languageBtn'>
        {language === 'eng' ? (
          <img
            src={eng}
            alt='EnglishLenguageReferenceImg'
            className='EngLangRefImg'
          />
        ) : (
          <img
            src={esp}
            alt='SpanishLenguageReferenceImg'
            className='EspLangRefImg'
          />
        )}
      </button>
    </header>
  );
};

export default Header;