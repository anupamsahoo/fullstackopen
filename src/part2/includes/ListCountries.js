import { useState } from "react";
import ShowCountry from "./ShowCountry";

const ListCountry = ({ countries }) => {
  const [isShown, setIsShown] = useState(false);
  const [country, setCountry] = useState([]);
  //return { countries.map((c) => "")};
  const handleShowCountry = (country) => {
    console.log("click view: ", country);
    setIsShown((isShown) => !isShown);
    setCountry(country);
  };
  const handleBack = () => {
    setIsShown(false);
    setCountry([]);
  };
  if (countries) {
    if (countries.length > 30) {
      console.log("here more than 10");
      return (
        <>
          <p>Too Many Matches, specify another filter</p>
        </>
      );
    } else if (countries && countries.length === 1) {
      console.log("here only one");
      const cData = countries[0];
      console.log(cData);
      return (
        <>
          <ShowCountry country={cData} />
        </>
      );
    } else {
      console.log("here less than 10");
      return (
        <>
          {isShown ? (
            <>
              <button onClick={handleBack}>Back to list</button>
              <ShowCountry country={country} />
            </>
          ) : (
            <ul>
              {countries.map((c, i) => (
                <li key={i}>
                  {c.name.common}{" "}
                  <button onClick={() => handleShowCountry(c)}>
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      );
    }
  }
};

export default ListCountry;
