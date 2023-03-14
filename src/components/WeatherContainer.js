import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import Data from "./Data";
import useFetch from "../CustomHooks/useFetch";

function WeatherContainer() {
  const city = "london";
  const BASE_URL = `${process.env.REACT_APP_BASE_URL_PART_1}${city}${process.env.REACT_APP_BASE_URL_PART_2}${process.env.REACT_APP_API_KEY}`;
  console.log(`Base => ${BASE_URL}`);
  const { data, loadingState, error } = useFetch(BASE_URL);

  return (
    <div>
      <h1>Async Data Fetching</h1>
      {loadingState && <Loader />}
      {error && <Error message={error.message} />}
      {data && <Data data={data} />}
    </div>
  );
}

export default WeatherContainer;
