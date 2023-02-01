import React from "react";
import "./App.css";
import Flags from "./components/Flag/Flags";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
        <Header/>
      <div className="container">
        <Flags />
      </div>
    </div>
  );
};

export default App;
