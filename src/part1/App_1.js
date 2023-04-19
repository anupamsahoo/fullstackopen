import { useState } from "react";
const Header = () => <h1>Counter</h1>;
const Display = ({ counter }) => <p>{counter}</p>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const DisplayLeftRight = ({ clicksLeft, clicksRight }) => (
  <>
    <p>clicksLeft: {clicksLeft}</p>
    <p>clicksRight: {clicksRight}</p>
  </>
);
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {allClicks.join(" ")}</div>;
};
const App_1 = () => {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setZero = () => setCounter(0);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    /*  const newClicks = { ...clicks, left: clicks.left + 1 };
    setClicks(newClicks); */
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };
  const handleRightClick = () => {
    //const newClicks = { ...clicks, right: clicks.right + 1 };
    //setClicks(newClicks);
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <>
      <Header />
      <Display counter={counter} />
      <Button handleClick={decreaseByOne} text="minus" />
      <Button handleClick={setZero} text="zero" />
      <Button handleClick={increaseByOne} text="plus" />
      <DisplayLeftRight clicksLeft={clicks.left} clicksRight={clicks.right} />
      <Button handleClick={handleLeftClick} text="Click Left" />
      <Button handleClick={handleRightClick} text="Click Right" />

      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(" ")}</p>
        <p>Total Clicks: {total}</p>
      </div>
      <History allClicks={allClicks} />
    </>
  );
};

export default App_1;
