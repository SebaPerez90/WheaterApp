import englishIcon from '../../assets/englishIcon.png';
import spanishIcon from '../../assets/spanishIcon.png';
import { useStore } from '../../../store';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

const LanguageButton = () => {
  const { languageEng, toggleLanguage } = useStore();
  const btnRef = useRef();

  const infoMsj = languageEng
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
      btnRef.current.style.animation = 'iconEnglish 700ms linear';
      setTimeout(() => {
        toggleLanguage();
        infoMsj();
      }, 700);
    } else {
      btnRef.current.style.animation = 'iconSpanish 1.2s linear reverse';
      setTimeout(() => {
        toggleLanguage();
        infoMsj();
      }, 500);
    }
  };

  return (
    <>
      {languageEng ? (
        <button
          ref={btnRef}
          onClick={toggleEfect}
          className='border-2 rounded-full border-[#b1adcc] scale-75'
        >
          <img
            src={englishIcon}
            alt='english-icon-reference'
          />
        </button>
      ) : (
        <button
          ref={btnRef}
          onClick={toggleEfect}
          className='border-2 rounded-full border-[#b1adcc] scale-75'
        >
          <img
            src={spanishIcon}
            alt='spanish-icon-reference'
          />
        </button>
      )}
    </>
  );
};

export default LanguageButton;
