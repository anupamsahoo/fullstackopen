import { useState } from "react";
const Part1App1 = () => {
  const Part = ({ part }) => (
    <li>
      {part.name} {part.exercises}
    </li>
  );
  const Course = ({ course }) => {
    const parts = course.parts;
    const total = parts.reduce((s, p) => {
      console.log("what is happening", s);
      return s + p.exercises;
    }, 0);
    return (
      <>
        <h1>{course.name}</h1>
        <ul>
          {parts.map((part) => (
            <Part key={part.id} part={part} />
          ))}
        </ul>
        <p>
          <strong>Total of {total} exercises</strong>
        </p>
      </>
    );
  };
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return courses.map((course, i) => <Course key={i} course={course} />);
};
export default Part1App1;
