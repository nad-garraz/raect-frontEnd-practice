import { useEffect, useState } from 'react';
import { shortList, list, longList } from './data.js';
import Slide from './Slide.jsx';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const nextPerson = (delta, oldPerson) => {
    const pL = people.length;
    const next =
      delta > 0 ? (oldPerson + delta) % pL : (oldPerson + delta + pL) % pL;
    setCurrentPerson(next);
  };

  // Para que el slide se haga solo.
  //   NO olvidar la cleanup function
  //
  // useEffect(() => {
  //   let sliderId = setInterval(() => {
  //     nextPerson(1, currentPerson);
  //   }, 2000);
  //   return () => {
  //     clearInterval(sliderId);
  //   };
  // }, [currentPerson]);

  return (
    <div className="slider-container">
      {people.map((person, personIndex) => {
        // El cero es el indice elegido para aparecer en primer plano
        return (
          <Slide
            key={person.id}
            {...person}
            slidePosition={personIndex - currentPerson}
          />
        );
      })}
      <button className="prev" onClick={() => nextPerson(-1, currentPerson)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => nextPerson(1, currentPerson)}>
        <FiChevronRight/>
      </button>
    </div>
  );

  // return (
  //   <main>
  //     <div className="slider-container">
  //       <Slide {...person} />
  //     </div>
  //     <button
  //       className="btn"
  //       onClick={() => setCurrent(nextPerson(1, current))}
  //     >
  //       Next
  //     </button>
  //     <button
  //       className="btn"
  //       onClick={() => setCurrent(nextPerson(-1, current))}
  //     >
  //       Prev
  //     </button>
  //   </main>
  // );
};

export default Carousel;
