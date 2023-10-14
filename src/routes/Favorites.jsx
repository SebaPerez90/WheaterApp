import { useState, useEffect } from 'react';

export default function Favorites() {
  const [favorite, setFavorite] = useState({});

  useEffect(() => {
    update();
  }, [])
  
  const update = async () => {
    try {
      const resp = await fetch(
        'http://api.openweathermap.org/data/2.5/forecast?q=buenos aires&units=metric&appid=3d9cbbaa2c744ad8b91912d8c0979261',
      );
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);

        setFavorite({
          city: data.city.name,
          temperature: data.list[0].main.temp.toFixed(1),
        });
      } else throw new Error('something went wrong while trying to fetch the data');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ color: 'white' }}>
      <h1>favorites section</h1>
      <button onClick={update}>fetch</button>
    </div>
  );
}
