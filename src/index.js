import React from "react";
import ReactDOM from "react-dom/client";
import App from "./part0/App_0";
import App_1 from "./part0/App_1";
import Feedback from "./part0/Feedback";
import RandomText from "./part0/RandomText";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Feedback />
    <RandomText />
  </>
);
