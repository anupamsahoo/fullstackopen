import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./part0/App_0";
//import App_1 from "./part0/App_1";
//import Feedback from "./part0/Feedback";
//import RandomText from "./part0/RandomText";
import Part1App1 from "./part1/Part1App1";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Part1App1 notes={notes} />
  </>
);
