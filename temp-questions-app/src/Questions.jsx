import { useState } from 'react';
import questions from './data';
import Question from './Question';

const Questions = () => {
  const [currentId, setCurrentId] = useState(null);

  // Only show the selected "new Id" so if the same Id is selected
  //   CLOSE everything. The next click will be on a fresh Id,
  //   it does not matter if it is the same one.
  const currentAnswer = (id) => {
    setCurrentId(currentId === id ? null : id);
  };

  return (
    <article className="list">
      <h1>Accordion</h1>
        {/* Here starts the loop of the data */}
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              {...question} /* Inside this line: id, title and info */
              currentId={currentId}
              currentAnswer={() => currentAnswer(question.id)}
            />
          );
        })}
    </article>
  );
};

export default Questions;
