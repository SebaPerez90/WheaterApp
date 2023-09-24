const fetchData = async (valueCapture) => {
  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';

  // prettier-ignore
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=metric&appid=${APIkey}`);
  const data = await response.json();
  console.log(data);

  //forecast data
  const city = data.city.name;
  const pop = data.list[0].pop * 100;
  const temperature = data.list[0].main.temp;
  const humidity = data.list[0].main.humidity;
  const tempMax = data.list[0].main.temp_max;
  const tempMin = data.list[0].main.temp_min;

  const weatherInfo = document.querySelector('.forecastData');
  weatherInfo.innerHTML =
    // prettier-ignore
    `<div>
      <h3>${city}</h3>
      <p>Current temperature ${temperature}C</p>
      <p>Max temperature ${tempMax}C</p>
      <p>Min temperature ${tempMin}C</p>
      <p>Humidity ${humidity}%</p>
      <p>Probability of Precipitation ${pop}%</p>
    </div>`;
};

export default fetchData;
