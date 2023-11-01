import { useRef, useState } from 'react';
import { useStore } from '../../../store';
import ThemeButton from './ThemeButton';
import LanguageButton from './LanguageButton';

const HambuerguerMenu = () => {
  const { themeDark } = useStore();

  const container_bars = useRef();
  const first_bar = useRef();
  const second_bar = useRef();
  const third_bar = useRef();

  const [active, setActive] = useState(false);

  const openMenu = () => {
    if (active) {
      first_bar.current.style.cssText = 'height: 0.1;transition: 300ms; transform: rotate(0deg)';
      second_bar.current.style.cssText = 'height: 0.1;transition: 300ms; opacity:1';
      third_bar.current.style.cssText = 'height: 0.1;transition: 300ms; transform: rotate(0deg)';

      setTimeout(() => {
        container_bars.current.style.cssText = 'gap: 0.4; transition: all 300ms';
      }, 300);

      setActive(!active);
    } else {
      container_bars.current.style.cssText = 'gap:0 ; transition: all 100ms; transform : translateY(.5em)';

      setTimeout(() => {
        first_bar.current.style.animation = 'rotation 200ms linear forwards';
        second_bar.current.style.animation = 'rotation 200ms linear forwards';
        third_bar.current.style.animation = 'rotation 200ms linear forwards';
      }, 120);

      setTimeout(() => {
        first_bar.current.style.cssText =
          'height:0.3; transition: 300ms; transform: rotate(-40deg); position:relative;';
        second_bar.current.style.opacity = '0';
        third_bar.current.style.cssText =
          'height:0.3; transition: 300ms; transform: rotate(40deg); position:relative;top:-0.4em';
      }, 500);

      setActive(!active);
    }
  };

  return (
    <>
      <div
        ref={container_bars}
        onClick={openMenu}
        className='ham-menu-container mt-2'
      >
        <span
          ref={first_bar}
          className='first-bar'
        ></span>
        <span
          ref={second_bar}
          className='second-bar'
        ></span>
        <span
          ref={third_bar}
          className='third-bar'
        ></span>
      </div>
      {active ? (
        <div className={themeDark ? 'header-menu-dt' : 'header-menu-lt'}>
          <p>Preferences</p>
          <ul className={themeDark ? 'menu-list-dt' : 'menu-list-t'}>
            <li>
              <ThemeButton />
            </li>
            <li><LanguageButton /></li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default HambuerguerMenu;
