import { FaQuoteRight } from 'react-icons/fa';

const Slide = ({ image, name, quote, title, slidePosition }) => {
  return (
    <article
      className="slide"
      style={{
        transform: `translateX(${100 * slidePosition}%)`,
        // si no está en primer plano opacity a 0
        // opacity: !slidePosition ? 1 : 0,
        // visibility: !slidePosition ? 'visible' : 'hidden',
      }}
    >
      <img src={image} alt={name} className="person-img" />
      <h5 className="name">{name}</h5>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Slide;
