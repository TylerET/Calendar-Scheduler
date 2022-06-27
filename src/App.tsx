import React from "react";
import { useState } from "react";
import "./App.css";
import Month from "./components/Month";
import { getMonth } from "./utils/getMonth";

function App() {
  const [currentMonth, SetCurrentMonth] = useState(getMonth());
  // console.table(getMonth());
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <Month month={currentMonth} />
    </div>
  );
}

export default App;
