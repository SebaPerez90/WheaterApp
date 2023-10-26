import SunIcon from '../assets/SunIcon.svg';
import MoonIcon from '../assets/MoonIcon.svg';

const Buttons = () => {
  return (
    <>
      <button style={{backgroundColor:'black', borderRadius:'50%', scale:'.8'}}>
        <img
          src={MoonIcon}
          alt='dark-theme-icon'
        />
      </button>
      <button style={{borderRadius:'50%', scale:'.8'}} className='bg-black'>
        <img
          src={SunIcon}
          alt='light-theme-icon'
        />
      </button>
    </>
  );
};

export default Buttons;
