import SunIcon from '../assets/SunIcon.svg';
import MoonIcon from '../assets/MoonIcon.svg';
import { useStore } from '../../store';
import { useRef, useEffect } from 'react';

const Buttons = () => {
  const { themeDark, toggleTheme } = useStore();
  const btnRef = useRef();
  const svgRef = useRef();

  useEffect(() => {
    themeDark ? (svgRef.current.style.animation = 'rise 500ms linear forwards') : '';
  }, [themeDark]);

  const toggleEfect = () => {
    if (themeDark) {
      btnRef.current.style.animation = 'efect2 200ms linear 1 forwards';
      setTimeout(() => {
        toggleTheme();
      }, 220);
    } else {
      btnRef.current.style.animation = 'efect1 200ms linear 1 forwards';
      svgRef.current.style.animation = 'rotation 600ms linear infinite';
      setTimeout(() => {
        toggleTheme();
      }, 220);
    }
  };

  return (
    <>
      {themeDark ? (
        <div className='flex justify-between items-center w-24 rounded-full bg-[#222222] shadow-[2px_2px_6px_#050505] overflow-hidden'>
          <button
            ref={btnRef}
            onClick={toggleEfect}
            className='bg-[#222222] rounded-full border-4 h-7 w-7 ml-2 z-20'
          ></button>
          <img
            ref={svgRef}
            className='rounded-full mr-2 scale-125 z-10 relative top-12'
            src={MoonIcon}
            alt='dark-theme-icon'
          />
        </div>
      ) : (
        <div className='border-[1px] flex justify-between items-center w-24 rounded-full bg-[#e4e4e4] shadow-[2px_2px_6px_#050505]'>
          <img
            ref={svgRef}
            className='rounded-full ml-1 z-10'
            src={SunIcon}
            alt='sun-theme-icon'
          />
          <button
            ref={btnRef}
            onClick={toggleEfect}
            className='bg-[#dcccae] rounded-full border-4 border-[#ffa500] h-7 w-7 mr-2 z-20'
            id='btn'
          ></button>
        </div>
      )}
    </>
  );
};

export default Buttons;
