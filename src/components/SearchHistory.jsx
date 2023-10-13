import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../store';
import { MdDeleteForever } from 'react-icons/md';

const SearchHistory = forwardRef(({ valueCapture, styles }, ref) => {
  const { weatherData } = useStore();

  // history state
  const [searchHistory, setSearchHistory] = useState(
    localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : [],
  );

  // icon state
  const [iconSearchHistory, setIconSearchHistory] = useState(
    localStorage.getItem('iconSearchHistory') ? JSON.parse(localStorage.getItem('iconSearchHistory')) : [],
  );

  // temperature state
  const [tempSearchHistory, setTempSearchHistory] = useState(
    localStorage.getItem('tempSearchHistory') ? JSON.parse(localStorage.getItem('tempSearchHistory')) : [],
  );

  ///////////////////////////////////////////////////////////////////////////////
  // estamos probando guardar la ciudad en una variable y guardarla en el storage
  ///////////////////////////////////////////////////////////////////////////////
  let isEmpty = weatherData.country ?? null;

  // this efect preserve the current search history location before the page refresh
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    localStorage.setItem('iconSearchHistory', JSON.stringify(iconSearchHistory));
    localStorage.setItem('renderFlag', JSON.stringify(isEmpty));
  }, [searchHistory, iconSearchHistory]);

  useEffect(() => {
    localStorage.setItem('renderFlag', JSON.stringify(isEmpty));
    console.log('pepe');
  }, [weatherData]);

  // temperature set storage fn
  const handleSetIcon = () => {
    localStorage.setItem('iconSearchHistory', JSON.stringify(iconSearchHistory));

    setIconSearchHistory([...iconSearchHistory, weatherData.iconID]);
  };

  // history set storage fn
  const handleSetHistory = () => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    setSearchHistory([...searchHistory, valueCapture]);
  };

  // temperature set storage fn
  const handleSetTemp = () => {
    localStorage.setItem('tempSearchHistory', JSON.stringify(searchHistory));

    setTempSearchHistory([...tempSearchHistory, weatherData.temperature]);
  };

  // clean all search history and localStorage
  const cleanUpHistory = () => {
    localStorage.clear();
  };

  const getFlag = localStorage.getItem('renderFlag') ?? JSON.parse(localStorage.getItem('renderFlag'));

  useImperativeHandle(ref, () => ({
    handleSetHistory,
    handleSetIcon,
    handleSetTemp,
  }));

  return (
    <div>
      {getFlag ? (
        <div
          className='search-history-dt'
          style={styles}
        >
          <div>
            {searchHistory.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            {iconSearchHistory.map((item, index) => (
              <img
                key={index}
                src={`http://openweathermap.org/img/wn/${item}.png`}
                alt='reference icon location'
              />
            ))}
          </div>
          <div>
            {tempSearchHistory.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <button onClick={cleanUpHistory}>
            <MdDeleteForever />
          </button>
        </div>
      ) : null}
      <button onClick={() => console.log(getFlag)}>log</button>
    </div>
  );
});

SearchHistory.propTypes = {
  valueCapture: PropTypes.any,
  styles: PropTypes.any,
};

SearchHistory.displayName = 'SearchHistory';

export default SearchHistory;
