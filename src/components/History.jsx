import { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

const History = forwardRef(({ valueCapture }, ref) => {
  const [history, setHistory] = useState(
    localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [],
  );

  const handleSetStorage = () => {
    localStorage.setItem('history', JSON.stringify(history));

    setHistory([...history, valueCapture]);
  };

  const saludar = () => {
    console.log('hello world');
  };

  useImperativeHandle(ref, () => ({
    handleSetStorage,
    saludar
  }));

  return (
    <div>
      <button onClick={() => localStorage.clear()}>clear storage</button>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

History.propTypes = {
  valueCapture: PropTypes.any,
  setStorageRef: PropTypes.func,
};

History.displayName = 'History';

export default History;
