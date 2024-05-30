import React, { useState } from "react";
import Headers from "./components/header";
import Searchresult from "./components/serch";
import './App.css';
import End from "./components/end";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Headers setResults={setResults} />
      <Searchresult results={results} />
        <End/>
    </div>
  );
}

export default App;