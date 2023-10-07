import SpanishCardInfo from './SpanishCardInfo.jsx';
import EnglishCardInfo from './EnglishCardInfo.jsx';
import { FcSearch } from 'react-icons/fc';
import { Redirect } from 'wouter';
import { useStore } from '../../store';
import { toast } from 'react-hot-toast';

export default function WeatherData() {
  const { shouldRedirect, languageEng, valueCapture, setValueCapture, setWeatherData, themeDark } = useStore();

  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const URLDinamicRequest = `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`;

  const errorMessage = () =>
    toast.error('text input can not be empty', {
      position: 'top-center',
    });

  const checkingInput = () => {
    if (!valueCapture) {
      errorMessage();
      return;
    } else setWeatherData(URLDinamicRequest);
  };
  //this effect run if the languageEng state change.
  // useEffect(() => {
  //   if (valueCapture) {
  //     setweatherData();
  //   }
  // }, [languageEng]);

  return (
    <main className={themeDark ? 'main-dark-theme' : 'main-light-theme'}>
      <input
        placeholder={languageEng ? 'enter a Location...' : 'ingrese una ubicación...'}
        type='text'
        name='country'
        id='form-section-input'
        autoFocus
        onChange={setValueCapture}
      />

      <button
        className='form-section-btn'
        onClick={checkingInput}
      >
        <FcSearch />
      </button>

      {languageEng ? <EnglishCardInfo /> : <SpanishCardInfo />}

      {shouldRedirect ? <Redirect to='/notfound' /> : null}
    </main>
  );
}
