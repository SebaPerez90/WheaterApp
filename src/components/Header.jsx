import { useStore } from '../../store';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { FaCopy } from 'react-icons/fa';
import esp from '../assets/esp.png';
import eng from '../assets/eng.png';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

export default function Header() {
  const { themeDark, toggleTheme, languageEng, toggleLanguage } = useStore();
  const URLresourse = useRef();
  const btnRef = useRef();

  const copySucess = () => toast.success('copied', { position: 'top-center' });

  const handleCopyToClipboard = () => {
    btnRef.current.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"></path></svg>`;

    setTimeout(() => {
      btnRef.current.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>`;
    }, 2000);

    const textToCopy = URLresourse.current.innerText;

    navigator.clipboard.writeText(textToCopy);
    copySucess();
    return;
  };

  return (
    <header className={themeDark ? 'header-container-dt' : 'header-container-lt'}>
      <div className={themeDark ? 'header-resourse-dt' : 'header-resourse-lt'}>
        <p>{languageEng ? 'Resource:' : 'Recurso:'}</p>
        <div className={themeDark ? 'header-url-dt' : 'header-url-lt'}>
          <p ref={URLresourse}>https://home.openweathermap.org/</p>

          <button
            ref={btnRef}
            className='FaCopyIcon'
            onClick={handleCopyToClipboard}
          >
            <FaCopy />
          </button>
        </div>
      </div>

      <div className='header-title-container'>
        <h1>{languageEng ? 'Wheatter App' : 'Aplicacion del Clima'}</h1>
        <p>
          {languageEng
            ? 'An interactive and dynamic application to stay updated on weather conditions.'
            : 'Una aplicación interactiva y dinámica para mantenerse actualizado sobre las condiciones climáticas.'}
        </p>
      </div>
      <div className={themeDark ? 'header-btn-container-dt' : 'header-btn-container-lt'}>
        <button
          onClick={toggleTheme}
          className={themeDark ? 'header-btn-dt' : 'header-btn-lt'}
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
      </div>
    </header>
  );
}
