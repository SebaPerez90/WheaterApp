import { useState, useRef } from 'react';
import { useStore } from '../../store';
import { FcExpand, FcCollapse } from 'react-icons/fc';

const FAQ = () => {
  const { languageEng, themeDark } = useStore();

  const [refIcon1, setRefIcon1] = useState(true);
  const [refIcon2, setRefIcon2] = useState(true);
  const [refIcon3, setRefIcon3] = useState(true);
  const [refIcon4, setRefIcon4] = useState(true);
  const [refIcon5, setRefIcon5] = useState(true);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const test2 = (ref) => {
    switch (ref) {
      case ref1:
        ref.current.classList.toggle('expand-content');

        ref.current.classList[1] === undefined
          ? (ref.current.className = 'faq-answer-dt')
          : (ref.current.className = ref.current.classList[1]);

        setRefIcon1(!refIcon1);

        break;

      case ref2:
        ref.current.classList.toggle('expand-content');

        ref.current.classList[1] === undefined
          ? (ref.current.className = 'faq-answer-dt')
          : (ref.current.className = ref.current.classList[1]);

        setRefIcon2(!refIcon2);

        break;

      case ref3:
        ref.current.classList.toggle('expand-content');

        ref.current.classList[1] === undefined
          ? (ref.current.className = 'faq-answer-dt')
          : (ref.current.className = ref.current.classList[1]);

        setRefIcon3(!refIcon3);

        break;

      case ref4:
        ref.current.classList.toggle('expand-content');

        ref.current.classList[1] === undefined
          ? (ref.current.className = 'faq-answer-dt')
          : (ref.current.className = ref.current.classList[1]);

        setRefIcon4(!refIcon4);

        break;

      case ref5:
        ref.current.classList.toggle('expand-content');

        ref.current.classList[1] === undefined
          ? (ref.current.className = 'faq-answer-dt')
          : (ref.current.className = ref.current.classList[1]);

        setRefIcon5(!refIcon5);

        break;
    }
  };


  return (
    <section className={themeDark ? 'faq-section-container-dt' : 'faq-section-container-lt'}>
      <h3>{languageEng ? 'Frequently Asked Questions' : 'Preguntas Comunes'}</h3>
      {/* prettier-ignore */}
      <div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>test2(ref1)}>Which time format and timezone are used?</p>
            <span>{refIcon1 ? <FcExpand /> : <FcCollapse />}</span>
          </div>
          <div
            ref={ref1}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>respuesta 1</p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>test2(ref2)}>How can I specify locations in API calls?</p>
            <span>{refIcon2 ? <FcExpand /> : <FcCollapse />}</span>
          </div>
          <div
            ref={ref2}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>respuesta 2</p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>test2(ref3)}>API calls return an error 404?</p>
            <span>{refIcon3 ? <FcExpand /> : <FcCollapse />}</span>
          </div>
          <div
            ref={ref3}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>respuesta 3</p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>test2(ref4)}>How can I a request in the app?</p>
            <span>{refIcon4 ? <FcExpand /> : <FcCollapse />}</span>
          </div>
          <div
            ref={ref4}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>respuesta 4</p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>test2(ref5)}>How works the searchs history?</p>
            <span>{refIcon5 ? <FcExpand /> : <FcCollapse />}</span>
          </div>
          <div
            ref={ref5}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>respuesta 5</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
