import SpanishCardInfo from './SpanishCardInfo.jsx';
import EnglishCardInfo from './EnglishCardInfo.jsx';
import ForecastNextDays from './ForecastNextDays.jsx';
import History from './History.jsx';
import { FcSearch } from 'react-icons/fc';
import { Redirect } from 'wouter';
import { useStore } from '../../store';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';

export default function WeatherData() {
  const { shouldRedirect, languageEng, valueCapture, setValueCapture, setWeatherData, themeDark } = useStore();

  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const URLDinamicRequest = `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`;

  //this is the ref child component which contains the method 'handleSetStorage' previously config
  const historyRef = useRef();

  // alert message in the case the input it is empty
  const errorMessage = () =>
    toast.error('text input can not be empty', {
      position: 'top-center',
    });

  // this function is trigger to the button 'search' to control the content in input type text
  // and if it is all ok , trigger the fetch fn() and history search fn()
  const checkingInput = () => {
    if (!valueCapture) {
      errorMessage();
      return;
    } else {
      setWeatherData(URLDinamicRequest);
      historyRef.current.handleSetStorage();
    }
  };

  return (
    <main className={themeDark ? 'main-weather-container-dt' : 'main-light-main-weather-container-lt'}>
      <div className={themeDark ? 'main-weather-form-dt' : 'main-weather-form-lt'}>
        <History
          valueCapture={valueCapture}
          ref={historyRef}
        />

        <input
          placeholder={languageEng ? 'enter a Location ...' : 'ingrese una ubicación ...'}
          type='text'
          name='country'
          className={themeDark ? 'weather-input-dt' : 'weather-input-lt'}
          autoFocus
          autoComplete='country-name'
          onChange={setValueCapture}
        />

        <button
          className={themeDark ? 'weather-serchBtn-dt' : 'weather-serchBtn-lt'}
          onClick={checkingInput}
        >
          <FcSearch />
        </button>
      </div>

      <ForecastNextDays />

      {languageEng ? <EnglishCardInfo /> : <SpanishCardInfo />}

      {/* if fetch fn response code status is equal to '404' , redirect to URL path that contains more info about this type error in fetching data */}
      {shouldRedirect ? <Redirect to='/notfound' /> : null}
    </main>
  );
}
