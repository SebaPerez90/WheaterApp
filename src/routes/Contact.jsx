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
              autoFocus
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
                : 'Siéntete libre de compartir tu experiencia de usuario'}
              <br></br>
              {languageEng ? 'Leave your coment.' : 'Deja tu comentario.'}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

/*

<div className='rayShining flex justify-center items-center bg-blue-400 h-[25em]'>
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
</div>;

*/
