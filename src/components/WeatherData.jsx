import SpanishCardInfo from './SpanishCardInfo.jsx';
import EnglishCardInfo from './EnglishCardInfo.jsx';
import React from 'react';
import { Redirect } from 'wouter';
import { useStore } from '../../store';

export default function WeatherData() {
  const { shouldRedirect, languageEng, valueCapture, setValueCapture, setWeatherData } = useStore();

  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const URLDinamicRequest = `http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`;

  //this effect run if the languageEng state change.
  // useEffect(() => {
  //   if (valueCapture) {
  //     setweatherData();
  //   }
  // }, [languageEng]);

  return (
    <section>
      <button onClick={() => setWeatherData(URLDinamicRequest)}>search</button>
      <input
        type='text'
        name='input'
        onChange={setValueCapture}
      />
      <button onClick={() => console.log(shouldRedirect)}>log</button>

      {languageEng ? <EnglishCardInfo /> : <SpanishCardInfo />}

      {shouldRedirect ? <Redirect to='/notfound' /> : null}
    </section>
  );
}
