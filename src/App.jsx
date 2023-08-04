import React from "react";

import constants from "./utils/constants";
import useGetApi from "./hooks/useGetApi.hook";
import Table from "./components/table/table.component";
import Error from "./components/error/error.component";
import Loader from "./components/loader/loader.component";
import Header from "./components/header/header.component";
import RangeFilter from "./components/range-filter/rangeFilter.component";

const { getPatientsListUrl } = constants;

function App() {
  const { isLoading, error } = useGetApi(getPatientsListUrl);

  return (
    <React.Fragment>
      <Header />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <RangeFilter />
          <Table />
        </>
      )}
    </React.Fragment>
  );
}

export default App;
