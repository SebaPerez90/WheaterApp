import EnglishCardInfo from './EnglishCardInfo.jsx';
import ForecastNextDays from './ForecastNextDays.jsx';
import SearchHistory from './SearchHistory.jsx';

import { FcSearch } from 'react-icons/fc';
import { FaHistory } from 'react-icons/fa';

import { Redirect } from 'wouter';
import { useStore } from '../../store';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';

export default function WeatherData() {
  const {
    shouldRedirect,
    languageEng,
    valueCapture,
    setValueCapture,
    setWeatherData,
    themeDark,
    weatherData,
    hiddenHistory,
    setHiddenHistory,
    temperatureUnit,
  } = useStore();

  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const URLDinamicRequest = `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=${temperatureUnit}&appid=${APIkey}`

  // references
  const historyRef = useRef();
  const myInput = useRef();

  useEffect(() => {
    if (!weatherData.city) return;

    historyRef.current.handleSetHistory();
    historyRef.current.handleSetIcon();
    historyRef.current.handleSetTemp();
  }, [weatherData]);

  // alert message in the case the input it is empty
  const errorMessage = () =>
    toast.error('text input can not be empty', {
      position: 'top-center',
    });

  const searchHistoryEmptymessage = () =>
    toast.error('search history is empty', {
      position: 'top-center',
    });

  // this function is trigger by the button 'search' to control the content in the input type text is not empty and
  // if everything is ok, trigger the fetch fn() and history search fn()
  const checkingInput = () => {
    if (!valueCapture) {
      errorMessage();
      return;
    } else {
      setWeatherData(URLDinamicRequest);
      myInput.current.value = '';
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////
  //////////////          revisar esto para mañana   /////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  const showHistorySearch = () => {
    if (!historyRef.current.isEmpty) {
      setHiddenHistory();
    } else {
      searchHistoryEmptymessage();
      return;
    }
  };

  // these styles are applied when the state that renders "Search History" is changed.
  const conditionalStyles = {
    scale: '1',
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: '#2a557a',
    transform: ' translate(-1em , -5em)',
  };

  return (
    <main className={themeDark ? 'main-weather-container-dt' : 'main-light-main-weather-container-lt'}>
      <section className={themeDark ? 'grid-form-area-container-dt' : 'main-weather-form-lt'}>
        {/* this state control show/hide search history if the localStorage is not empty*/}
        {hiddenHistory ? (
          <SearchHistory
            valueCapture={valueCapture}
            ref={historyRef}
            styles={{}}
          />
        ) : (
          <SearchHistory
            valueCapture={valueCapture}
            ref={historyRef}
            styles={conditionalStyles}
          />
        )}

        <div className={themeDark ? 'main-weather-form-dt' : 'main-weather-form-lt'}>
          <input
            placeholder={languageEng ? 'enter a Location ...' : 'ingrese una ubicación ...'}
            type='text'
            name='country'
            className={themeDark ? 'weather-input-dt' : 'weather-input-lt'}
            autoFocus
            autoComplete='country-name'
            ref={myInput}
            onChange={setValueCapture}
          />
          <button
            className={themeDark ? 'weather-serchBtn-dt' : 'weather-serchBtn-lt'}
            onClick={checkingInput}
          >
            <FcSearch />
          </button>
        </div>

        {/* <button onClick={showHistorySearch}>
          <FaHistory />
        </button> */}
      </section>

      <ForecastNextDays />

      {languageEng ? <EnglishCardInfo /> : 'componente en español'}

      {/* if fetch fn response code status is equal to '404' , redirect to URL path that contains more info about this type error in fetching data */}
      {shouldRedirect ? <Redirect to='/notfound' /> : null}
    </main>
  );
}
