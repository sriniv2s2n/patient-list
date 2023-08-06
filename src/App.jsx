import React from "react";

import Header from "./components/header/header.component";
import PatientsList from "./components/patients-list/patientsList.component";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <PatientsList />
      </main>
    </div>
  );
}

export default App;
