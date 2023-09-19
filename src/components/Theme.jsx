import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useThemeStore } from '../store/themes';

export const Theme = () => {
  const lightThemeBtn = useRef(null);
  const darkThemeBtn = useRef(null);

  // Zustand store
  const { theme, toggleTheme } = useThemeStore();

  //this action trigger a event "onClick" to control the "dark theme" styles
  const darkTheme = () => {
    try {
      if (darkThemeBtn.current.classList.contains('dark-theme-desactive')) {
        toggleTheme;
        console.log(theme);
        darkThemeBtn.current.classList.remove('dark-theme-desactive');
        darkThemeBtn.current.classList.add('dark-theme');
        lightThemeBtn.current.classList.remove('light-theme');
        lightThemeBtn.current.classList.add('light-theme-desactive');
      }
    } catch (error) {
      console.error('An error has occurred :' + error);
    }
  };

  //this action trigger a event "onClick" to control the "dark theme" styles
  const lightTheme = () => {
    try {
      if (lightThemeBtn.current.classList.contains('light-theme-desactive')) {
        toggleTheme;
        console.log(theme);
        darkThemeBtn.current.classList.add('dark-theme-desactive');
        lightThemeBtn.current.classList.add('light-theme');
      }
    } catch (error) {
      console.error('An error has occurred :' + error);
    }
  };

  return (
    <>
      <div className='themes-btn-containers'>
        <button
          onClick={() => lightTheme()}
          ref={lightThemeBtn}
          className='light-theme-desactive'>
          <BsFillSunFill />
        </button>

        <button
          onClick={() => darkTheme()}
          ref={darkThemeBtn}
          className='dark-theme'>
          <BsFillMoonFill />
        </button>
      </div>
      <h1>testing zustand store</h1>
    </>
  );
};

Theme.propTypes = {
  selectTheme: PropTypes.func,
};

export default Theme;
