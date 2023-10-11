import { useStore } from '../../store';

export default function Footer() {
  const { weatherData, languageEng } = useStore();

  if (!weatherData.date_first_day) return;

  return (
    <aside className='aside-container'>
      <p>
        {languageEng
          ? `Forecast next days in ${weatherData.city}`
          : `Pronóstico dias siguientes en ${weatherData.city}`}
      </p>
      <div className='aside-weather-next-days'>
        <div className='aside-grid-item-1'>
          <time>{weatherData.date_first_day}</time>
          <span>{weatherData.tempMin_first_day}</span>
          <span>{weatherData.temperature_first_day}</span>
          <span>{weatherData.tempMax_first_day}</span>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.iconID_first_day}.png`}
            alt='Weather Icon'
          />
        </div>
        <div className='aside-grid-item-2'>
          <time>{weatherData.date_second_day}</time>
          <span>{weatherData.tempMin_second_day}</span>
          <span>{weatherData.temperature_second_day}</span>
          <span>{weatherData.tempMax_second_day}</span>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.iconID_second_day}.png`}
            alt='Weather Icon'
          />
        </div>
        <div className='aside-grid-item-3'>
          <time>{weatherData.date_third_day}</time>
          <span>{weatherData.tempMin_third_day}</span>
          <span>{weatherData.temperature_third_day}</span>
          <span>{weatherData.tempMax_third_day}</span>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.iconID_third_day}.png`}
            alt='Weather Icon'
          />
        </div>
      </div>
    </aside>
  );
}
