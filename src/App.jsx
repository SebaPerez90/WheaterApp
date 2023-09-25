import React, { useState, createContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import esp from './assets/esp.png';
import eng from './assets/eng.png';
import '../public/darkTheme.css';
import '../public/lighTheme.css';
import ForecastData from './components/ForecastData.jsx';

export const AppContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [language, setLenguage] = useState('eng');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const toggleLenguage = () => {
    setLenguage(language === 'eng' ? 'esp' : 'eng');
  };

  return (
    <AppContext.Provider value={{ theme, language }}>
      <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
        <header className='header-section'>
          <button
            onClick={toggleTheme}
            className={theme === 'dark' ? 'darkThemeBtn' : 'lightThemeBtn'}
          >
            {theme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
          <button onClick={toggleLenguage} className='languageBtn'>
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
        <ForecastData />
      </main>
    </AppContext.Provider>
  );
};

export default App;
