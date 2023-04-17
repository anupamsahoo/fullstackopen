//Header, Content, and Total.
const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  const cData = props.data;
  //console.log(cData);
  return (
    <>
      {cData.map((value, index) => {
        return (
          <p key={index}>
            {value.name} {value.exercises}
          </p>
        );
      })}
    </>
  );
};
const Hello = ({ age, name }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  );
};
const Total = (props) => {
  const cData = props.data;
  const sumD = cData.reduce((a, v) => (a = a + v.exercises), 0);
  return <p>Number of exercises {sumD}</p>;
};

const Counter = ({ counter }) => {
  return (
    <>
      <p>{counter}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const courseData = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={courseData.name} />
      <Content data={courseData.parts} />
      <Total data={courseData.parts} />
      <Hello name="Anupam" age="39" />
      <Counter counter="10" />
    </>
  );
};

export default App;
