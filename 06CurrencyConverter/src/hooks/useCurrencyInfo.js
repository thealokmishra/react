import { useEffect, useState } from "react";

// custom hook to fetch currency info
function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //empty object to store response data
  useEffect(() => {
    // fetch response for given currency
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json()) // convert to json
      .then((res) => setData(res[currency])); //set object data to the response recieved for given currency
    console.log(data);
  }, [currency]); // dependency array to re-render when currency or data changes
  console.log(data);
  return data; // return the data object, contains exchange rates for the given currency
}

export default useCurrencyInfo;
