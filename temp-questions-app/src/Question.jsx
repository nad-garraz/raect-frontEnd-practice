const Question = ({ info, title, id, currentAnswer, currentId }) => {
  const showInfo = id === currentId;
  return (
    <section className="container">
      <div className="question-btn">
        <p>{title}</p>
        <button className="btn expand" onClick={() => currentAnswer(id)} />
      </div>
      {showInfo && <p className="answer">{info}</p>}
    </section>
  );
};


export default Question;
