import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

import people from './data.js';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = (delta) => {
    const pL = people.length;
    return delta > 0 ? (index + delta) % pL : (index + delta + pL) % pL;
  };

  const randomPerson = () => {
    const pL = people.length;
    let randomNumber = Math.floor(Math.random() * pL);
    return randomNumber === index ? (index + 1) % pL : randomNumber;
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
        <div className=".btn-container">
          <button
            type="button"
            className="prev-btn"
            onClick={() => setIndex(nextPerson(-1))}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="prev-btn"
            onClick={() => setIndex(nextPerson(1))}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => setIndex(randomPerson())}
        >
          Surprise me
        </button>
      </article>
    </main>
  );
};

export default App;
