import { useEffect, useState } from "react";
import countryService from "./services/countries";
import ListCountry from "./includes/ListCountries";

const CountryData = () => {
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const updatedCountries = filterData ? filterData : countries;

  useEffect(() => {
    //console.log("effect run, currency is now", country);
    if (country) {
      console.log("fetching country...");
      //const timeoutId = setTimeout(() => console.log(`I can see you're not typing. I can use "${value}" now!`), 1000);
      const timer = setTimeout(() => {
        countryService.getAll().then((response) => {
          console.log(response);
          setCountries(response);
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [country]);

  const fetchCountry = (event) => {
    //console.log(event.target.value);
    setCountry(event.target.value);
    if (countries && countries.length > 0) {
      const result = countries.filter((c) => {
        const fetchedName = c.name.common.toUpperCase();
        return fetchedName.includes(event.target.value.toUpperCase());
      });
      //console.log("Filter: ", result);
      if (result.length === 1) {
        //console.log("Got Only One Result.");
        setFilterData(result);
      } else if (result.length > 10) {
        //Too Many Matches, specify another filter
        setFilterData(null);
        //console.log("Too Many Matches, specify another filter");
      } else {
        //List
        setFilterData(result);
        //console.log(result);
      }
    }
  };

  //console.log(countries);
  return (
    <>
      <p>Search By Name</p>
      <input onChange={fetchCountry} />
      <h1>
        Total Countries are: {updatedCountries ? updatedCountries.length : 0}
      </h1>
      <ListCountry countries={updatedCountries} />
    </>
  );
};
export default CountryData;
