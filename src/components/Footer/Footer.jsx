import { PiGithubLogoFill } from 'react-icons/pi';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiMinutemailer } from 'react-icons/si';
import { FaArrowUpLong } from 'react-icons/fa6';
import { useStore } from '../../../store';
import moonIcon from '../../assets/svg/moonIcon.svg';
import sunIcon from '../../assets/svg/sunIcon.svg';
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
        <div className={themeDark ? 'readme-card-container-dt' : 'readme-card-container-lt'}>
          <h1>README</h1>
          {languageEng ? (
            <p>
              Do you want collaborate on this project ? <br></br>
              Do you want clone it to your local machine to explore further alternatives ?<br></br>I invite you go
              README for more explanations on how to do this.
            </p>
          ) : (
            <p>
              Si desea colaborar en este proyecto o clonarlo en su máquina local para explorar más alternativas, lo
              invito a ir al README para obtener más explicaciones sobre cómo hacerlo
            </p>
          )}
          <button>redirect</button>
        </div>
      </section>

      <aside className={themeDark ? 'footer-aside-container-dt' : 'footer-aside-container-lt'}>
        <div className={themeDark ? 'title-aside-dt' : 'title-aside-lt'}>
          <h1>{languageEng ? 'Weather App' : 'Aplicacion del Clima'}</h1>
          {themeDark ? (
            <img
              src={moonIcon}
              alt='moon-icon-reference'
            />
          ) : (
            <img
              src={sunIcon}
              alt='sun-icon-reference'
            />
          )}
        </div>
        <ul className={themeDark ? 'footer-list-dt' : 'footer-list-lt'}>
          <li>
            <a
              className={themeDark ? 'list-item-dt linkedin' : 'list-item-lt linkedin'}
              href='https://www.linkedin.com/in/sebaperez90/'
              rel='noreferrer'
              target='_blank'
            >
              <RiLinkedinFill />
            </a>
          </li>
          <li>
            <a
              className={themeDark ? 'list-item-dt github' : 'list-item-lt github'}
              href='https://github.com/SebaPerez90'
              rel='noreferrer'
              target='_blank'
            >
              <PiGithubLogoFill />
            </a>
          </li>
          <li>
            <a
              className={themeDark ? 'list-item-dt email' : 'list-item-lt email'}
              href='/form'
              rel='noreferrer'
            >
              <SiMinutemailer />
            </a>
          </li>
        </ul>
        <div className={themeDark ? 'developed-dt' : 'developed-lt'}>
          <p>{languageEng ? 'Sebastian Perez © 2023 | made with ❤️' : 'Sebastian Perez © 2023 | Echo con ❤️'}</p>
        </div>
      </aside>
      <FaArrowUpLong
        className='up-arrow'
        onClick={() => console.log('aaaaaaaaa')}
      />
    </footer>
  );
}
