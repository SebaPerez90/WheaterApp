import React, { useRef } from 'react';
import Hero from './Hero';

const Fetch = () => {
  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const fetchData = async () => {
    // prettier-ignore
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIkey}`);
    const data = await response.json();
    console.log(data);

    //forecast data
    const city = data.city.name;

    const weatherInfo = document.querySelector('.forecastData');
    weatherInfo.innerHTML = `<h3>${city}</h3>`;
  };

  return (
    <div>
      <Hero fetchData={fetchData} />
      <section className='forecastData'></section>
    </div>
  );
};

export default Fetch;
