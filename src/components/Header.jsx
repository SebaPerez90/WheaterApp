import { useStore } from '../../store';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { FaCopy } from 'react-icons/fa';
import esp from '../assets/esp.png';
import eng from '../assets/eng.png';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

export default function Header() {
  const { themeDark, toggleTheme, languageEng, toggleLanguage } = useStore();
  const copySucess = () => toast.success('copied', { position: 'top-center' });
  const URLresourse = useRef();

  const handleCopyToClipboard = () => {
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

          <button onClick={handleCopyToClipboard}>
            <FaCopy />
          </button>
        </div>
      </div>

      <h1>{languageEng ? 'Wheatter App' : 'Aplicacion del Clima'}</h1>

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
