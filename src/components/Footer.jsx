import { PiGithubLogoFill } from 'react-icons/pi';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiMinutemailer } from 'react-icons/si';
import { useStore } from '../../store';
import IconApp from '../assets/icon.png';
import FAQ from './FAQ';

export default function Footer() {
  const { languageEng, themeDark } = useStore();

  return (
    <footer
      style={{ color: 'white' }}
      className={themeDark ? 'footer-container-dt' : 'footer-container-lt'}
    >
      <FAQ />
      <section className={themeDark ? 'readme-section-container-dt' : 'readme-section-container-lt'}>
        <div className={themeDark ? 'readme-card-container-dt' : 'readme-card-container-dt'}>
          <h1>README</h1>
          <p>
            {languageEng
              ? 'If you wish to collaborate on this project or clone it to your local machine to explore further alternatives, I invite you to go to the "README" for more explanations on how to do this.'
              : 'Si desea colaborar en este proyecto o clonarlo en su máquina local para explorar más alternativas, lo invito a ir al "README" para obtener más explicaciones sobre cómo hacerlo'}
          </p>
        </div>
      </section>
      <aside className={themeDark ? 'footer-aside-container-dt' : 'footer-aside-container-lt'}>
        <div className={themeDark ? 'title-aside-dt' : 'title-aside-lt'}>
          <p>{languageEng ? 'Weather App' : 'Aplicacion del Clima'}</p>
          <img
            src={IconApp}
            alt='Icon-App'
          />
        </div>
        <ul className={themeDark ? 'footer-list-dt' : 'footer-list-lt'}>
          <li>
            <a
              className={themeDark ? 'list-item-dt linkedin' : 'list-item-lt'}
              href='https://www.linkedin.com/in/sebaperez90/'
              rel='noreferrer'
              target='_blank'
            >
              <RiLinkedinFill />
            </a>
          </li>
          <li>
            <a
              className={themeDark ? 'list-item-dt github' : 'list-item-lt'}
              href='https://github.com/SebaPerez90'
              rel='noreferrer'
              target='_blank'
            >
              <PiGithubLogoFill />
            </a>
          </li>
          <li>
            <a
              className={themeDark ? 'list-item-dt email' : 'list-item-lt'}
              href='/form'
              rel='noreferrer'
            >
              <SiMinutemailer />
            </a>
          </li>
        </ul>
        <div className={themeDark ? 'btns-aside-dt' : 'btns-aside-lt'}>
          <button>{languageEng ? 'log in' : 'inicia sesión'}</button>
          <button>{languageEng ? 'sign up' : 'registrate'}</button>
        </div>
      </aside>
    </footer>
  );
}
