import { create } from 'zustand';

export const useStore = create((set) => ({
  //states
  themeDark: true,
  languageEng: true,
  valueCapture: '',
  shouldRedirect: false,
  // weatherData: {},

  //actions
  toggleTheme: () => set((state) => ({ themeDark: state.themeDark ? false : true })),

  toggleLanguage: () => set((state) => ({ languageEng: state.languageEng ? false : true })),

  setValueCapture: (e) => set({ valueCapture: e.target.value }),

  setShouldRedirect: () => set((state) => ({ shouldRedirect: state.shouldRedirect ? false : true })),

  // setWeatherData: async () => {
  //   const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';

  //   try {
  //     const response = await fetch(
  //       `http://api.openweathermap.org/data/2.5/forecast?q=quilmes&units=metric&appid=${APIkey}`,
  //     );

  //     if (!response.ok) throw new Error('something goes wrong');

  //     if (response.status !== 200) {
  //       set((state) => ({ shouldRedirect: state.true }));
  //       return;
  //     }

  //     const data = await response.json();

  //     set({
  //       weatherData: {
  //         city: data.city.name,
  //         country: data.city.country,
  //         pop: data.list[0].pop * 100,
  //         temperature: data.list[0].main.temp.toFixed(1),
  //         temp_feels_like: data.list[0].main.feels_like.toFixed(1),
  //         humidity: data.list[0].main.humidity,
  //         tempMax: data.list[0].main.temp_max.toFixed(1),
  //         tempMin: data.list[0].main.temp_min.toFixed(1),
  //         iconID: data.list[0].weather[0].icon,
  //         main: data.list[0].weather[0].main,
  //         main_description: data.list[0].weather[0].description,
  //         wind_speed: (data.list[0].wind.speed * 3.6).toFixed(1),
  //         date: data.list[0].dt_txt.slice(0, 10),
  //         visibility: data.list[0].visibility / 1000,
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
}));
