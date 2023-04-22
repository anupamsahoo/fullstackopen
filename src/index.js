import React from "react";
import ReactDOM from "react-dom/client";
import AppEffect from "./AppEffect";
import PhoneBook from "./part2/PhoneBook";
import App from "./App";
import Currency from "./part2/Currency";
import CountryData from "./part2/CountryData";
//import App from "./part0/App_0";
//import App_1 from "./part0/App_1";
//import Feedback from "./part0/Feedback";
//import RandomText from "./part0/RandomText";
//import Part1App1 from "./part1/Part1App1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/*<PhoneBook />

    <App />
    <AppEffect />
    <Currency />*/}

    <CountryData />
  </>
);
