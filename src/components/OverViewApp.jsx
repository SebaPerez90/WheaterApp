import { useStore } from '../../store.js';
import input_dt from '../assets/images/input-marked-dt.png';
import button_dt from '../assets/images/btn-marked-dt.png';
import history_dt from '../assets/images/history-marked-dt.png';

import input_lt from '../assets/images/input-marked-lt.png';
import button_lt from '../assets/images/btn-marked-lt.png';
import history_lt from '../assets/images/history-marked-lt.png';

const OverViewApp = () => {
  const { themeDark, languageEng } = useStore();

  return (
    <section className={themeDark ? 'overview-app-dt' : 'overview-app-lt'}>
      <div className='first-container'>
        <div className='animate-[overviewApp_1.3s_linear_forwards]'>
          <h1>{languageEng ? 'Step 1' : 'Paso 1'}</h1>
          <p className='top-6 relative'>{languageEng ? 'Fill the input field' : 'Llenar el input'}</p>
          <img
            src={themeDark ? input_dt : input_lt}
            alt='input-marked'
          />
        </div>
        <div className='animate-[overviewApp_1.6s_linear_forwards]'>
          <h1>{languageEng ? 'Step 2' : 'Paso 2'}</h1>
          <p className='top-6 relative'>
            {languageEng ? 'Click the search button.' : 'Haz click el boton de busqueda'}
          </p>
          <img
            src={themeDark ? button_dt : button_lt}
            alt='button-marked'
          />
        </div>
      </div>
      <div className='second-container'>
        <div className='animate-[overviewApp_1.9s_linear_forwards]'>
          <h1>{languageEng ? 'Step 3' : 'Paso 3'}</h1>
          <div>
            <p className='top-7 relative'>
              {languageEng
                ? 'Click on the icon on the left-hand side to view the search history.'
                : 'Haz click en el icono en la parte izquierda para ver el historial de busquedas.'}
            </p>
            <img
              className='relative left-12'
              src={themeDark ? history_dt : history_lt}
              alt='history-marked'
            />
          </div>
        </div>
        <div className='animate-[overviewApp_2.2s_linear_forwards]'>
          <h1>💡</h1>
          <div className={themeDark ? 'hint-dt' : 'hint-lt'}>
            <p>
              {languageEng
                ? 'You can adjust the app according to your preferences:'
                : 'Puedes ajustar la app segun tus preferencias:'}
            </p>
            <ul>
              <li>
                {languageEng
                  ? 'Click on the hamburger menu at the top right.'
                  : 'Haz click en el menu de barras en la parte superior derecha'}
              </li>
              <li>{languageEng ? 'Click on the "preferences" option' : 'Haz click en la opción "preferencias" '}</li>
              <li>
                {languageEng
                  ? 'Set up the language, theme, and temperature unit.'
                  : 'Configura el idioma, el tema y la unidad de temperatura.'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OverViewApp;
