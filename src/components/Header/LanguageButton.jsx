import englishIcon from '../../assets/images/englishIcon.png';
import spanishIcon from '../../assets/images/spanishIcon.png';
import { useStore } from '../../../store';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

const LanguageButton = () => {
  const { languageEng, toggleLanguage, darkTheme } = useStore();
  const btnRef = useRef();

  const infoMsjLanguage = languageEng
    ? () =>
        toast('El idioma actual es el español!', {
          icon: '💡',
          style: {
            borderRadius: '10px',
            background: '#443e66',
            color: '#fff',
          },
          duration: 2500,
        })
    : () =>
        toast('current language is english!', {
          icon: '💡',
          style: {
            borderRadius: '10px',
            background: '#443e66',
            color: '#fff',
          },
          duration: 2500,
        });

  const toggleEfect = () => {
    if (languageEng) {
      btnRef.current.style.animation = 'iconEnglish 800ms linear';
      setTimeout(() => {
        toggleLanguage();
        infoMsjLanguage();
      }, 700);
    } else {
      btnRef.current.style.animation = 'iconSpanish 1.2s linear reverse';
      setTimeout(() => {
        toggleLanguage();
        infoMsjLanguage();
      }, 500);
    }
  };

  return (
    <>
      {languageEng ? (
        <button
          ref={btnRef}
          onClick={toggleEfect}
        >
          <img
            src={englishIcon}
            alt='english-icon-reference'
            className='scale-[1.1]'
          />
        </button>
      ) : (
        <button
          ref={btnRef}
          onClick={toggleEfect}
        >
          <img
            src={spanishIcon}
            alt='spanish-icon-reference'
            className='scale-[1.1]'
          />
        </button>
      )}
    </>
  );
};

export default LanguageButton;
