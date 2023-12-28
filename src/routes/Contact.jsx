import Header from '../components/Header/Header';
import { useStore } from '../../store.js';
import avatar from '../assets/images/avatar.png';
import sun from '../assets/svg/sunIcon.svg';
import cloud from '../assets/svg/cloud.svg';

const Contact = () => {
  const { themeDark, languageEng } = useStore();

  return (
    <>
      <Header />
      <main className={themeDark ? 'contact-main-dt' : 'contact-main-lt'}>
        <div className={themeDark ? 'subtitle-container-dt': 'subtitle-container-lt'}>
          <h1>
            {languageEng
              ? 'Hello! If you got here. You are forced to leave your feedback😉'
              : 'Hola! si llegaste hasta aca. Estas obligado a dejar tu feedback😉'}
          </h1>
          <p>
            {languageEng
              ? 'In this section, I invite you to tell us more in detail about your experience using the application: functionalities, design, response times, structure, and for example, whether you found it intuitive and user-friendly. Any kind of feedback is constructive and very important, as it will be taken into consideration.'
              : 'En esta sección te invito a que nos cuentes mas a detalle sobre tu experiencia con el uso de la aplicación. Funcionalidades , diseño , tiempos de respuesta, estructuración y por ejemplo si te resulto intuitiva y amigable.  Cualquier tipo de comentario es constructivo y es muy importante ya que van a ser tenidos en cuenta.'}
          </p>
        </div>
        <section className={themeDark ? 'contact-section-dt' : 'contact-section-lt'}>
          <form
            action=''
            className={themeDark ? 'form-container-dt' : 'form-container-lt'}
          >
            <input
              placeholder={languageEng ? 'name' : 'nombre'}
              name='name'
              type='email'
              onClick={{}}
              className={themeDark ? 'input-name-dt' : 'input-name-lt'}
            />
            <input
              placeholder={languageEng ? 'email' : 'correo'}
              name='email'
              type='text'
              onClick={{}}
              className={themeDark ? 'input-email-dt' : 'input-email-lt'}
            />
            <textarea
              placeholder={languageEng ? 'message' : 'mensaje'}
              name='coment'
              className={themeDark ? 'text-area-dt' : 'text-area-lt'}
            ></textarea>
            <button
              onClick={{}}
              className={themeDark ? 'send-btn-dt' : 'send-btn-lt'}
            >
              {languageEng ? 'send' : 'enviar'}
            </button>
          </form>
          <div className={themeDark ? 'aside-form-dt' : 'aside-form-lt'}>
            {themeDark ? (
              <div className='bg-form-dt'>
                <div className='moon-svg bg-yellow-100 overflow-hidden w-24 h-24 rounded-full shadow-[0_0_25px_#fff200] relative animate-[MoonRise_600ms_linear_forwards] z-10 right-[1em] top-[-9em]'>
                  <div className='crater-1 bg-[#9a998445] translate-x-[1.2em] translate-y-[0.2em]  h-4 w-4 rounded-full'></div>
                  <div className='crater-2 bg-[#9a998445] translate-x-[3em] translate-y-[1em] h-8 w-8 rounded-full'></div>
                  <div className='crater-3 bg-[#9a998445] translate-x-[3em] translate-y-[1.7em] h-2 w-2 rounded-full'></div>
                  <div className='crater-4 bg-[#9a998445] translate-x-[.2em] translate-y-[1em] h-4 w-4 rounded-full'></div>
                  <div className='crater-5 bg-[#9a998445] translate-x-[2em] translate-y-[-1.2em] h-4 w-4 rounded-full'></div>
                  <div className='crater-6 bg-[#9a998445] translate-x-[3.2em] translate-y-[-5.8em] h-4 w-4 rounded-full'></div>
                  <div className='crater-7 bg-[#9a998445] translate-x-[.5em] translate-y-[-4.9em] h-4 w-4 rounded-full'></div>
                  <div className='crater-8 bg-[#9a998445] translate-x-[4em] translate-y-[-3em] h-4 w-4 rounded-full'></div>
                  <div className='crater-9 bg-[#9a998445] translate-x-[1.2em] translate-y-[-3.6em] h-7 w-7 rounded-full'></div>
                  <div className='crater-10 bg-[#9a998445] translate-x-[4.7em] translate-y-[-9em] h-4 w-4 rounded-full'></div>
                </div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-9 bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_900ms_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[22em] bottom-[2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[12em] bottom-[4.7em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[14.5em] bottom-[7em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-6em] bottom-[11em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[9.2em] bottom-[9em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.5s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-4.2em] bottom-[5em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.9s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[16.9em] bottom-[10em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.2s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-9em] bottom-[8.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-1em] bottom-[7.6em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[7em] bottom-[1.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[14.4em] bottom-[1.5em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-7em] bottom-[1.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-1.2em] bottom-[3em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[1em] bottom-[11em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[18.3em] bottom-[5.4em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.66s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[13em] bottom-[10.3em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-5.7em] bottom-[8.2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.1s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-8em] bottom-[6em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.7s_linear_alternate-reverse_infinite]'></div>
                <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-9.6em] bottom-[4.2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
              </div>
            ) : (
              <div className='bg-form-lt'>
                <div>
                  <img
                    src={sun}
                    alt='sun-svg'
                  />
                  <div className='flex flex-col animate-[rayShining_5s_linear_alternate-reverse_infinite] transition-all'>
                    <div className='translate-y-6 translate-x-6'>
                      <div
                        className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative right-12 bottom-10 scale-[2] opacity-20'
                        style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                      ></div>
                      <div
                        className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-16 opacity-70'
                        style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                      ></div>
                      <div
                        className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-20 scale-50'
                        style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                      ></div>
                    </div>
                    <div className='translate-y-[3em] scale-[1.7] translate-x-[1em]'>
                      <div
                        className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative right-12 bottom-10 scale-[2] opacity-20'
                        style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                      ></div>
                      <div
                        className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-16 opacity-70'
                        style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                      ></div>
                      <div
                        className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-20 scale-50'
                        style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={cloud}
                    alt='cloud-svg'
                  />
                  <img
                    src={cloud}
                    alt='cloud-svg'
                  />
                </div>
              </div>
            )}
            <div>
              <h1>{languageEng ? 'Contact Section' : 'Sección de Contacto'}</h1>
              <img
                src={avatar}
                alt='avatar-imagge'
                className={themeDark ? 'avatar-image-dt' : 'avatar-image-lt'}
              />
            </div>
            <p>
              {languageEng
                ? 'Feel free to share your user experience'
                : 'Siéntete libre de compartir tu experiencia'}
              <br></br>
              {languageEng ? 'Leave your coment.' : 'Deja tu comentario.'}
            </p>
          </div>
        </section>
        <div className={themeDark ? 'developed-dt' : 'developed-lt'}>
          <p>{languageEng ? 'Sebastian Perez © 2023 | made with ❤️' : 'Sebastian Perez © 2023 | Echo con ❤️'}</p>
        </div>
      </main>
    </>
  );
};

export default Contact;
