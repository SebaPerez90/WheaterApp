import { useStore } from '../../store.js';

const OverViewApp = () => {
  const { themeDark, languageEng } = useStore();
  return (
    <section className={themeDark ? 'overview-app-dt' : 'overview-app-lt'}>
      <div className='first-container'>
        <div className='animate-[overviewApp_1.3s_linear_forwards]'>
          <h1>{languageEng ? 'Step 1' : 'Paso 1'}</h1>
          <p className='top-8 relative'>{languageEng ? 'Fill the input field' : 'Llenar el input'}</p>
        </div>
        <div className='animate-[overviewApp_1.6s_linear_forwards]'>
          <h1>{languageEng ? 'Step 2' : 'Paso 2'}</h1>
          <p className='top-8 relative'>
            {languageEng ? 'Click the search button.' : 'Haz click el boton de busqueda'}
          </p>
        </div>
      </div>
      <div className='second-container'>
        <div className='animate-[overviewApp_1.9s_linear_forwards]'>
          <h1>{languageEng ? 'Step 3' : 'Paso 3'}</h1>
          <p className='top-7 relative'>
            {languageEng
              ? 'Click on the icon on the left-hand side to view the search history.'
              : 'Haz click en el icono en la parte izquierda para ver el historial de busquedas.'}
          </p>
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
