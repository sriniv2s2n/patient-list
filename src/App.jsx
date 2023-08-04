import React from "react";

import Table from "./components/table/table.component";
import Header from "./components/header/header.component";
import RangeFilter from "./components/range-filter/rangeFilter.component";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Table />
      <RangeFilter />
    </React.Fragment>
  );
}

export default App;
