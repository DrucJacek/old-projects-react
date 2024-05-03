import React from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div>
      <SearchBar placeholder="Podaj tytuł.." data={BookData}/>
    </div>
  );
}

export default App;
