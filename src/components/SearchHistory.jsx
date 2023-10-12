import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../store';

const SearchHistory = forwardRef(({ valueCapture }, ref) => {
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

  // this efect preserve the current search history location before the page refresh
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    localStorage.setItem('iconSearchHistory', JSON.stringify(iconSearchHistory));
  }, [searchHistory, iconSearchHistory]);

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

  useImperativeHandle(ref, () => ({
    handleSetHistory,
    handleSetIcon,
    handleSetTemp,
  }));

  return (
    <div className='search-history-dt'>
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
    </div>
  );
});

SearchHistory.propTypes = {
  valueCapture: PropTypes.any,
};

SearchHistory.displayName = 'SearchHistory';

export default SearchHistory;
