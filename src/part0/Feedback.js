import { useState } from "react";

const Heading = ({ title }) => <h2>{title}</h2>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Ststistics = ({ feedback, avarage, totalFeedback }) => {
  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <p>
        <strong>Good:</strong> {feedback.good}
      </p>
      <p>
        <strong>Bad:</strong> {feedback.bad}
      </p>
      <p>
        <strong>Neutral:</strong> {feedback.neutral}
      </p>
      <p>Total Collected Feedback: {totalFeedback}</p>
      <p>Avarage: {avarage}</p>
      <p>Positive: {(100 * feedback.good) / totalFeedback} %</p>
    </>
  );
};
const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  });
  const scores = { good: 1, bad: -1, neutral: 0 };
  const [avarage, setAvarage] = useState(0);

  const handleGood = () => {
    const updateGood = feedback.good + 1;
    const updateGoodScore = updateGood * scores.good;
    const updateAll = feedback.all + 1;
    const setGood = {
      ...feedback,
      good: updateGood,
      good_score: updateGoodScore,
      all: updateAll,
    };
    setFeedback(setGood);
    const totalScore =
      updateGoodScore +
      feedback.bad * scores.bad +
      feedback.neutral * scores.neutral;
    const ave = totalScore / updateAll;
    setAvarage(ave);
  };
  const handleBad = () => {
    const updateBad = feedback.bad + 1;
    const updateBadScore = updateBad * scores.bad;
    const updateAll = feedback.all + 1;
    const setBad = {
      ...feedback,
      bad: updateBad,
      bad_score: updateBadScore,
      all: updateAll,
    };
    setFeedback(setBad);
    const totalScore =
      updateBadScore +
      feedback.good * scores.good +
      feedback.neutral * scores.neutral;
    const ave = totalScore / updateAll;
    setAvarage(ave);
  };
  const handleNeutral = () => {
    const updateNeutral = feedback.neutral + 1;
    const updateNeutralScore = updateNeutral * scores.neutral;
    const updateAll = feedback.all + 1;
    const setNeutral = {
      ...feedback,
      neutral: updateNeutral,
      all: updateAll,
    };
    setFeedback(setNeutral);
    const totalScore =
      updateNeutralScore +
      feedback.bad * scores.bad +
      feedback.good * scores.good;
    const ave = totalScore / updateAll;
    setAvarage(ave);
  };
  return (
    <>
      <Heading title="Give Feedback" />
      <Button text="Good" handleClick={handleGood} />
      <Button text="Bad" handleClick={handleBad} />
      <Button text="Neutral" handleClick={handleNeutral} />
      <Heading title="Ststistics" />
      <Ststistics
        feedback={feedback}
        avarage={avarage}
        totalFeedback={feedback.all}
      />
    </>
  );
};

export default Feedback;
