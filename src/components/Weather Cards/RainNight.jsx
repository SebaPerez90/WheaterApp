const RainNight = () => {
  return (
      <div className='svg-container row-span-4 bg-slate-800 flex flex-col justify-between relative rounded-[.5em_.5em_0_0] border-[1px] border-b-0'>
        <div className='rain-containter absolute h-full w-full flex flex-col'>
          <div className='flex justify-evenly relative bottom-4 left-10'>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.1s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_770ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_500ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_730ms_linear_infinite]'></div>
            <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#56bcfc] relative z-50 rotate-[15deg] animate-[raining_1.3s_linear_infinite]'></div>
          </div>
          <div className='flex justify-around relative bottom-6 left-11'>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_960ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1.1s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_830ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_970ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_780ms_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
            <div className='small-drop bg-[#56bcfc] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_920ms_linear_infinite]'></div>
          </div>
        </div>
        <div className='moon-container bg-yellow-100 overflow-hidden w-24 h-24 rounded-full shadow-[0_0_25px_#fff200] relative animate-[MoonRise_1s_linear_forwards] z-10 left-14'>
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
        <div className='hills-container h-40 overflow-hidden z-20'>
          <div className='hill-1 bg-[#374466] rounded-[50%] relative z-[2] h-[11em] w-[16em] right-20 top-24'></div>
          <div className='hill-2 bg-[#374466] rounded-[50%] relative z-[2] h-[16em] w-[28em] left-24 bottom-32'></div>
          <div className='hill-3 bg-[#374466] rounded-[50%] relative z-[2] h-[11em] w-[16em] left-[28em] bottom-[21em]'></div>
          <div className='hill-4 bg-[#31314a] rounded-[50%] relative h-[11em] w-[24em] bottom-[35em] right-24'></div>
          <div className='hill-5 bg-[#31314a] rounded-[50%] relative h-[11em] w-[24em] bottom-[46em] left-80'></div>
        </div>
      </div>
  );
};

export default RainNight;
