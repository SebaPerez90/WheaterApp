import { create } from 'zustand';

export const useStore = create((set) => ({
  //states
  theme: 'dark',
  language: 'eng',
  weatherData: {},

  //actions
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),

  toggleLanguage: () => set((state) => ({ language: state.language === 'eng' ? 'esp' : 'eng' })),

  setWeatherData: async () => {

    const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261'

    try {
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=quilmes&units=metric&appid=${APIkey}`,
      );

      if (!resp.ok) throw new Error('something goes wrong');

      const data = await resp.json();

      set({
        weatherData: {
          city: data.city.name,
          country: data.city.country,
          pop: data.list[0].pop * 100,
          temperature: data.list[0].main.temp.toFixed(1),
          temp_feels_like: data.list[0].main.feels_like.toFixed(1),
          humidity: data.list[0].main.humidity,
          tempMax: data.list[0].main.temp_max.toFixed(1),
          tempMin: data.list[0].main.temp_min.toFixed(1),
          iconID: data.list[0].weather[0].icon,
          main: data.list[0].weather[0].main,
          main_description: data.list[0].weather[0].description,
          wind_speed: (data.list[0].wind.speed * 3.6).toFixed(1),
          date: data.list[0].dt_txt.slice(0, 10),
          visibility: data.list[0].visibility / 1000,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
