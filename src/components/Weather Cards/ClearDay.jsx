import sun from '../../assets/svg/sunIcon.svg';
import clouds from '../../assets/svg/cloud.svg';
import hills from '../../assets/svg/hills-day.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden'>
      <div className='flex justify-center items-center bg-[#7392c8] h-[25em]'>
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

        <img
          src={sun}
          alt='sun'
          style={{
            boxShadow: '0px 0px 1px #fcff333b',
            background: 'radial-gradient(circle, #fcff33e5 ,#fcff3317, transparent)',
          }}
          className='scale-[3] translate-y-[-5em] rounded-full border-[#fcff3316] absolute animate-[sunShining_5s_linear_alternate-reverse_infinite]'
        />
      </div>
      <div className='absolute bottom-[-8em]'>
        <img
          src={hills}
          alt='hills'
          className='relative left-16 scale-y-[2] scale-x-[1.5]'
        />
      </div>
    </div>
  );
};

export default RainDay;
