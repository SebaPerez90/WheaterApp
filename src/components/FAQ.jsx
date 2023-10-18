import { useState, useRef } from 'react';
import { useStore } from '../../store';
// import { FcExpand, FcCollapse } from 'react-icons/fc';
import {AiOutlinePlus} from 'react-icons/ai'

const FAQ = () => {
  const { languageEng, themeDark } = useStore();

  // const [expandIcon1, setExpandIcon1] = useState(false);
  // const [expandIcon2, setExpandIcon2] = useState(false);
  // const [expandIcon3, setExpandIcon3] = useState(false);
  // const [expandIcon4, setExpandIcon4] = useState(false);
  // const [expandIcon5, setExpandIcon5] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const test2 = (ref) => {
    switch (ref) {
      case ref1:
        languageEng ? (ref.current.innerHTML = '<p> pepe </p>') : (ref.current.innerHTML = '<p> laura </p>');
        // setExpandIcon1(!expandIcon1);

        ref.current.classList.toggle('hideen');
        break;

      case ref2:
        languageEng ? (ref.current.innerHTML = '<p> pepe </p>') : (ref.current.innerHTML = '<p> laura </p>');
        // setExpandIcon2(!expandIcon2);

        ref.current.classList.toggle('hideen');
        break;

      case ref3:
        languageEng ? (ref.current.innerHTML = '<p> pepe </p>') : (ref.current.innerHTML = '<p> laura </p>');
        // setExpandIcon3(!expandIcon3);

        ref.current.classList.toggle('hideen');
        break;

      case ref4:
        languageEng ? (ref.current.innerHTML = '<p> pepe </p>') : (ref.current.innerHTML = '<p> laura </p>');
        // setExpandIcon4(!expandIcon4);

        ref.current.classList.toggle('hideen');
        break;

      case ref5:
        languageEng ? (ref.current.innerHTML = '<p> pepe </p>') : (ref.current.innerHTML = '<p> laura </p>');
        // setExpandIcon5(!expandIcon5);

        ref.current.classList.toggle('hideen');
        break;
    }
  };

  return (
    <section className={themeDark ? 'faq-section-container-dt' : 'faq-section-container-lt'}>
      <h3>{languageEng ? 'Frequently Asked Questions' : 'Preguntas Comunes'}</h3>
      {/* prettier-ignore */}
      <div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <p onClick={()=>test2(ref1)}>Which time format and timezone are used?
            {/* <span style={{marginLeft: '1em'}}>{expandIcon1 ? <FcCollapse /> : <FcExpand />}</span> */}
          </p>
          <button><AiOutlinePlus /></button>
          <div
            ref={ref1}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <p onClick={()=>test2(ref2)}>How can I specify locations in API calls?
            {/* <span style={{marginLeft: '1em'}}>{expandIcon2 ? <FcCollapse /> : <FcExpand />}</span> */}
          </p>
          <button><AiOutlinePlus /></button>
          <div
            ref={ref2}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <p onClick={()=>test2(ref3)}>API calls return an error 404?
            {/* <span style={{marginLeft: '1em'}}>{expandIcon3 ? <FcCollapse />: <FcExpand />}</span> */}
          </p>
          <button><AiOutlinePlus /></button>
          <div
            ref={ref3}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <p onClick={()=>test2(ref4)}>How can I a request in the app?
            {/* <span style={{marginLeft: '1em'}}>{expandIcon4 ? <FcCollapse />: <FcExpand />}</span> */}
          </p>
          <button><AiOutlinePlus /></button>
          <div
            ref={ref4}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <p onClick={()=>test2(ref5)}>How works the searchs history?
            {/* <span style={{marginLeft: '1em'}}>{expandIcon5 ? <FcCollapse />: <FcExpand />}</span> */}
          </p>
          <button><AiOutlinePlus /></button>
          <div
            ref={ref5}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
          </div>
        </div>

      </div>
      {/* <div>
        <p>
          {languageEng ? 'if you want more info visit this ' : 'si quieres más información visita esta '}
          <a href=''>{languageEng ? 'source' : 'fuente'}</a>
        </p>
      </div> */}
    </section>
  );
};

export default FAQ;
