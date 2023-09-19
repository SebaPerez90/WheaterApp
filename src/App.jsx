import React, { useState, createContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Hero from './components/Hero.jsx';
import '../public/darkTheme.css';
import '../public/lighTheme.css';

export const AppContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [lenguage, setLenguage] = useState('eng');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const toggleLenguage = () => {
    setLenguage(lenguage === 'eng' ? 'esp' : 'eng');
  };

  return (
    <AppContext.Provider value={{ theme, lenguage }}>
      <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
        <header className='header-section'>
          <button
            onClick={toggleTheme}
            className={theme === 'dark' ? 'darkThemeBtn' : 'lightThemeBtn'}
          >
            {theme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
          <button onClick={toggleLenguage} className='lenguageBtn'>
            {lenguage === 'eng' ? (
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiklEQVR4nO1ZS2jUQAAN1ipKFcUPevAiCIIehG1GLJrQTG0tiCbVKlY9eBFE0YMHpfg/qSBUUESlXsRKBVspiW39i1YvrVap+MPLlq22iclkMyuo6EiiK3Xbbn6bZJF98CADOby3897M7ISiCiigAN+orb1WxPBtyxhBqmcF6ToriK9YQVJZXvzGClKKFcQ4I0jPWUFqZgRxdzkvxqh8wIq1HfNYXjpeXdeZaLjQR1hBslhd10mGj3fVP7GYHps0ODphQPpIko3NDF34uSuvFtzvGnhx4ETP98qNHeT1e0RMHDrZQzLHW3Y+ILrxzaL5nDaAIbBoQPoL5sCpQZYtCUU8UyPVNTa9Td19PED4bXcsMecvvyHZxuLtuMXhM5A2gNNGODqRrCitCUx4bHt3McOLF4eL8ENF00elrKHThJCi3Ipf3TZ59dbOW9lybjfO7MFYBhSL6AYhZEJuxG/vLq7a1N6ZLedeepDdgE4UFbUSQop9G0jHxi7nbnuQ2QE8Gjlw2pf4FcLNzbnKfCYdGYCAJDmw3pN4yLfMYARJ9pJ3J/uAUwMYAjm5asks1wYePh146SXvTvcB2w5o//ThhCvxO/Y/mt9xr/+H17w72QdcGdD0pKZp0xwbMI8HQWXfowGiqKjemfrDh8cxvNjvN/d2PXDRAfJ7pwYfHOk3T5V+c++kB24NYHNFqowttDfw+0jsO/c52QfgiPPSXlsDLC+1BJ1/Tx3QLF51ECGxL+j8ezUga6jL1kDlhnY16Px7N6D3O4nQ16Dz770D4KsjA2F0IDADjCAp+WoAc0CxNaCo+jOPK0TwVPUeWwOyii5FLlQbo8QqanQyA3vyeAZ22xowVpYu9pTPEGiU04soJ8AQ9EUtFo8s8GtH4i0DHDgUuWCYSfqgYwMfDWO2+Sci8sxrf4mHhvBcyg1kTT+WN6uPph+l3GJwcLBEUdGnqMUrKhpSFGUq5QVJuHRd1Nk3ysEmyg8wB85GWNwzlF+Q2toiA4KW0H95jhYJy46ncoF3hEyUVb05xNy3xuNkEpVLmFfe5tW3rKKfga02Kvopa6gh59frw/EZoSpFQ4kgVhtZ1ddQYUAuK5uCOXofhnTSf9ZByoDgOFq+fDoVNnBVbK65xWOOfudaPAfeYkgfwCw9h8oHpCroUoNbugdDusmAdK8B6X7zA94fms+9mANXzHfMd6PWW0AB/wt+AUd01b5eH9N0AAAAAElFTkSuQmCC' />
            ) : (
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACX0lEQVR4nO2ZzU4UQRSFj4pdmllo1Ig/C3eKU5ewQKKvoMaoCx8E8AWE6IqRoK+goCG6cUtil8YHUIlRp66jyKA+wDDLMtUZQRk6VtM9XT3aJznJZFJd+U7VraT7FlCqVKnUMsCuT2dxngmTTHjEhGVNaGqJ9ciEJku8ZcKCHWPH2mfgWx9GcFJL3NESDSaYJLbPaMLtL2dwInfw96dxhAmzmtBOCr5NkHU7l50zF3hNuBSVRErwLkv80ITrPQM3N7BHS9zPHJy6gswZYHem8CsXsJ8lnvYcnjb8pHEK+zKBt6thJ8wR3kRng/DM7nrqACxxL2943jzgd9PCX/EFz5s7sbOD3RjBQZZYLUCAtZUqDiUOYJSoGSVMQVxLBr9UGTShaBUA3ES2LEuVQfcAoZj2Dq26QkwlKJ+g7h1YbXWgjXF4ATThwJh/WLG9nw+cc1n9m95BVVwZBRMOAcRj76Aq1vMOJSSWCwBqYvzGpYS+FbiEmi4l1PYOqmLd7u8AoWg5nIFgzTuoinOw+h8c4lAsFLeEggcuJTTpHVTF+EUw3t+vEi/3jv41QBRCiY/eYdVWB9oJvrCv00rc6u8PmleVo84BOmU04x1cbXgGScWjOMASX/v2o96KCZd9B6gTriGNbOfY2+pLJC+dArUWFzNr8tpGa54hNGExs+buHzshMZdDgNnM2+u/Sw/jYi8uOLTE9/owriIPvRvCYds57lwPpQVvaYmanRN56/MQjjNhmiV4B/CaJaYaVRxDEcQSY0yYYMK8lnhtO9u/rlk7v+1/D7mKcTvWN2+pUv+KfgLTznkDr/tKugAAAABJRU5ErkJggg==' />
            )}
          </button>
        </header>
        <Hero />
      </main>
    </AppContext.Provider>
  );
};

export default App;
