import SpanishCardInfo from './SpanishCardInfo.jsx';
import EnglishCardInfo from './EnglishCardInfo.jsx';
import ForecastNextDays from './ForecastNextDays.jsx';
import { FcSearch } from 'react-icons/fc';
import { Redirect } from 'wouter';
import { useStore } from '../../store';
import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';

export default function WeatherData() {
  const { shouldRedirect, languageEng, valueCapture, setValueCapture, setWeatherData, themeDark } = useStore();

  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const URLDinamicRequest = `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`;

  const errorMessage = () =>
    toast.error('text input can not be empty', {
      position: 'top-center',
    });

  //test
  const input = document.querySelector('.weather-input-dt');

  const checkingInput = () => {
    if (!valueCapture) {
      errorMessage();
      return;
    } else {
      setWeatherData(URLDinamicRequest);
      setStorage();
    }
  };

  //this effect run if the languageEng state change.
  // useEffect(() => {
  //   // if (valueCapture) {
  //   // setweatherData();
  //   // }
  // }, [languageEng]);

  //test
  // useEffect(() => {
  //   const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
  //   setHistory(storedHistory);
  // }, []);

  //test
  const [history, setHistory] = useState([]);

  const setStorage = () => {
    localStorage.setItem('history', JSON.stringify(valueCapture));

    setHistory([...history, valueCapture]);

    input.value = '';
  };

  return (
    <main className={themeDark ? 'main-weather-container-dt' : 'main-light-main-weather-container-lt'}>
      <div className={themeDark ? 'main-weather-form-dt' : 'main-weather-form-lt'}>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

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

      {shouldRedirect ? <Redirect to='/notfound' /> : null}
    </main>
  );
}
