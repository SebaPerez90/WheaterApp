import { useStore } from '../../store.js';

const OverViewApp = () => {
  const { themeDark, languageEng } = useStore();
  return (
    <section className={themeDark ? 'overview-app-dt' : 'overview-app-lt'}>
      {/* 
      <div>cada busqueda que realizes se guardara en el historial de busquedas *** agregar referencia grafica ***</div>
      <div>
        cuenta con 18 animaciones dependiendo del clima de la busqueda realizada *** agregar referencia grafica ***
      </div> */}
      <div className='first-container'>
        <div>
          <h1>{languageEng ? 'step 1' : 'paso 1'}</h1>
          <p>llenar el input</p>
        </div>
        <div>
          <h1>{languageEng ? 'step 2' : 'paso 2'}</h1>
          <p>clicar el boton de busqueda</p>
        </div>
      </div>
      <div className='second-container'>
        <div>
          <h1>{languageEng ? 'step 3' : 'paso 3'}</h1>
          <p>puede ir al form section para colaborar o enviar un comentario sobre la app</p>
        </div>
        <div>
          <h1>{languageEng ? 'step 4' : 'paso 4'}</h1>
          <p>puedes ir al menu➡️preferences-➡️setting</p>
        </div>
      </div>
    </section>
  );
};
export default OverViewApp;
