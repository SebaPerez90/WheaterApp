import {} from 'react';
import { useStore } from '../../store';
import { FcExpand } from 'react-icons/fc';

const FAQ = () => {
  const { languageEng, themeDark } = useStore();

  return (
    <section className={themeDark ? 'faq-section-container-dt' : 'faq-section-container-lt'}>
      <h3>{languageEng ? 'Frequently Asked Questions' : 'Preguntas Comunes'}</h3>
      {/* prettier-ignore */}
      <div>
        <div>
          <p>Which time format and timezone are used? <span style={{marginLeft: '1em'}}><FcExpand /></span></p>
          <div>
            <p></p>
          </div>
        </div>

        <div>
          <p>How can I specify locations in API calls? <span style={{marginLeft: '1em'}}><FcExpand /></span></p>
          <div>
            <p></p>
          </div>
        </div>

        <div>
          <p>API calls return an error 404? <span style={{marginLeft: '1em'}}><FcExpand /></span></p>
          <div>
            <p></p>
          </div>
        </div>

        <div>
          <p>How can I a request in the app? <span style={{marginLeft: '1em'}}><FcExpand /></span></p>
          <div>
            <p></p>
          </div>
        </div>

        <div>
          <p>How works the searchs history? <span style={{marginLeft: '1em'}}><FcExpand /></span></p>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <p>
          {languageEng ? 'if you want more info visit this ' : 'si quieres más información visita esta '}
          <a href=''>{languageEng ? 'source' : 'fuente'}</a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
