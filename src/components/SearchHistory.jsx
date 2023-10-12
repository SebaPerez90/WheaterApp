import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../store';

const SearchHistory = forwardRef(({ valueCapture }, ref) => {
  const { weatherData } = useStore();

  // local storage set state
  const [searchHistory, setSearchHistory] = useState(
    localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : [],
  );

  // local storage set state
  const [iconSearchHistory, setIconSearchHistory] = useState(
    localStorage.getItem('iconSearchHistory') ? JSON.parse(localStorage.getItem('iconSearchHistory')) : [],
  );

  // this efect preserve the current search history location before the page refresh
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    localStorage.setItem('iconSearchHistory', JSON.stringify(iconSearchHistory));
  }, [searchHistory, iconSearchHistory]);

  const handleSetIcon = () => {
    localStorage.setItem('iconSearchHistory', JSON.stringify(iconSearchHistory));

    setIconSearchHistory([...iconSearchHistory, weatherData.iconID]);
  };

  const handleSetStorage = () => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    setSearchHistory([...searchHistory, valueCapture]);
  };

  useImperativeHandle(ref, () => ({
    handleSetStorage,
    handleSetIcon,
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
    </div>
  );
});

SearchHistory.propTypes = {
  valueCapture: PropTypes.any,
};

SearchHistory.displayName = 'SearchHistory';

export default SearchHistory;
