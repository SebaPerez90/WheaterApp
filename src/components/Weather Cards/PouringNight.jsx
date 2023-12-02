import hills from '../../assets/svg/hills-day.svg';
import clouds from '../../assets/svg/cloud-grey.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[0.6em_0.6em_0_0]'>
      <div className='flex justify-center items-center bg-slate-800  h-[25em]'>
        <div className='rain absolute top-2 flex justify-around w-full z-10'>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_200ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_300ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_600ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_200ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_450ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_320ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_600ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_450ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_600ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_310ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_500ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_300ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_470ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_280ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_490ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_350ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_450ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_250ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[4px] bg-sky-400 animate-[pouringRain_500ms_linear_infinite;]'></div>
        </div>
        <div className='moon-container bg-yellow-100 overflow-hidden w-24 h-24 rounded-full shadow-[0_0_25px_#fff200] relative animate-[MoonRise_600ms_linear_forwards] z-10 right-[-1.2em] top-[-11em]'>
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
        <div className='clouds absolute flex'>
          <img
            className='scale-x-[1.7] relative right-[17em] bottom-8 animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='scale-x-[1.7] z-10 relative right-[-6em] bottom-11 animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
        </div>
      </div>
      <div className='hills absolute bottom-[-8em]'>
        <img
          src={hills}
          alt='hills'
          className='relative left-16 scale-y-[2] scale-x-[1.6]'
        />
      </div>
    </div>
  );
};

export default RainDay;
