import { useState } from 'react';

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [toggleInfo, setToggleInfo] = useState(true);

  return (
    <article className="single-tour">
      <img className="img" src={image} alt="name" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p className="tour-info">
          {toggleInfo ? `${info.substring(0, 200)}... ` : `${info}  `}
          <button
            type="button"
            className="info-btn"
            onClick={() => setToggleInfo(!toggleInfo)}
          >
            {toggleInfo ? 'read more' : '\nshow less'}
          </button>
        </p>
      </div>
      <button
        className="btn btn-block delete-btn"
        onClick={() => deleteTour(id)}
      >
        not interested
      </button>
    </article>
  );
};

export default Tour;
