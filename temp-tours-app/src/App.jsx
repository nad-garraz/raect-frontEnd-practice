import { useEffect, useState } from 'react';

import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const deleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (err) {
      console.log(`Problemas en el fetch: ${err}.`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <div className="title">
          <h2>No tours left</h2>
          <div className="title-underline"></div>
          <button
            style={{ marginTop: '2rem' }}
            className="btn"
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
      </>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};

export default App;
