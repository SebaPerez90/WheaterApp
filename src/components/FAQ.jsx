import { useRef } from 'react';
import { useStore } from '../../store';
import { FcExpand } from 'react-icons/fc';
import inputImg from '../assets/images/FAQ/input-text.png';

const FAQ = () => {
  const { languageEng, themeDark } = useStore();
  const refIcon1 = useRef();
  const refIcon2 = useRef();
  const refIcon3 = useRef();
  const refIcon4 = useRef();
  const refIcon5 = useRef();

  const firstQuestion = useRef();
  const secondQuestion = useRef();
  const fourthQuestion = useRef();
  const fifthQuestion = useRef();
  const sixthQuestion = useRef();

  const expandCollapseContent = (refQuestion, refIcon) => {
    refQuestion.current.classList.toggle('expand-content');

    if (refQuestion.current.classList[1] === undefined) {
      refQuestion.current.className = 'faq-answer-dt';
      refIcon.current.style.animation = 'rotation2 600ms forwards';
    } else {
      refQuestion.current.className = refQuestion.current.classList[1];
      refIcon.current.style.animation = 'rotation 600ms forwards';
    }
  };

  return (
    <section className={themeDark ? 'faq-section-container-dt' : 'faq-section-container-lt'}>
      <h3>{languageEng ? 'Frequently Asked Questions' : 'Preguntas Comunes'}</h3>
      {/* prettier-ignore */}
      <div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(firstQuestion, refIcon1)}>
              {languageEng ?
              'How can I a request in the app?'
              :
              '¿Cómo puedo realizar una solicitud en la aplicación?'
              }
            </p>
            <span ref={refIcon1}><FcExpand /></span>
          </div>
          <div
            ref={firstQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>
                {languageEng ?
                'Fill in the text input and click on the search button with the magnifying glass icon to its right.'
                :
                'Complete la entrada de texto y haga clic en el botón con el icono de búsqueda , a su derecha.'
                }
              </p>
              <img src={inputImg} alt='input-text-img' />
              <p>
                {languageEng ?
                'You only need to enter the city name without the country name'
                :
                'Solo necesitas poner el nombre de la ciudad sin el nombre del país'
                }
              </p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(secondQuestion, refIcon2)}>
              {languageEng ? 
              'How works the searchs history?'
              :
              '¿Cómo funciona el historial de búsquedas?'
              }
            </p>
            <span ref={refIcon2}><FcExpand /></span>
          </div>
          <div
            ref={secondQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
               <p>
                {languageEng ?
                `When you make a successful request, the data from this search (temperature, city name, and main weather condition) is saved in memory. You can view the search history by clicking on the icon that refers to the search history. If you want to clear the search history, you can click on the icon that refers to delete within the search history.`
                :
                'Cuando realiza una solicitud exitosa, los datos de esta búsqueda (temperatura, nombre de la ciudad y clima principal) se guardan en la memoria. Puede ver el historial de búsqueda haciendo clic en el icono que referencia al  historial de búsqueda. Si desea limpiar el historial de búsqueda, puede hacer clic que referencia a eliminar dentro de historial de busqueda'
                }
              </p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(fourthQuestion, refIcon3)}>
              {languageEng ?
              'API calls return an error 404?'
              :
              '¿Las llamadas API devuelven un error 404?'
              }  
            </p>
            <span ref={refIcon3}><FcExpand /></span>
          </div>
          <div
            ref={fourthQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>
                {languageEng ?
                `If you enter an invalid location name or if it's not grammatically correct, the request may not yield results. Instead, you will be redirected to another page with more information about what happened with your request`
                :
                'Si ingresas un nombre de ubicación inválido o si no es gramaticalmente correcto, es posible que la solicitud no arroje resultados. En su lugar, serás redirigido a otra página con más información sobre lo que sucedió con tu solicitud.'
                }
              </p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(fifthQuestion, refIcon4)}>
              {languageEng ?
              'Can I choose the unit of temperature measurement in celcius or fahrenheit?'
              :
              '¿Puedo elegir la unidad de medida de la temperatura en celcius o fahrenheit?'
              }
            </p>
            <span ref={refIcon4}><FcExpand /></span>
          </div>
          <div
            ref={fifthQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>respuesta 4</p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(sixthQuestion, refIcon5)}>
              {languageEng ?
              'Where can I get more information to explore with the API?'
              :
              '¿Donde puedo obtener mas informacion para explorar con la API?'
              }
              </p>
              <span ref={refIcon5}><FcExpand /></span>
          </div>
          <div
            ref={sixthQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>
                {languageEng ? 
                'if you want more information to explore more alternatives and work with this API, check this source' 
                : 
                'Si desea obtener más información para explorar más alternativas y trabajar con esta API, consulte esta fuente'}
                <a href='#resourse'>{languageEng ? 'source' : 'fuente'}</a>
              </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
