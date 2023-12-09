import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async (url) => {
    const response = await fetch(url);
    // const newJobs = await response.json();
    setJobs(await response.json());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs(url);
  }, []);

  return isLoading ? (
    <section className="jobs-center">
      <div className="loading"></div>
    </section>
  ) : (
    <section className='jobs-center'>
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
