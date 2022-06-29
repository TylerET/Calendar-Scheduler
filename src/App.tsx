import React from "react";
import { useState, useEffect, useContext } from "react";
import "./App.css";
import Month from "./components/Month";
import { getMonth } from "./utils/getMonth";
import GlobalContext from "./context/GlobalContext";
import CalendarHeader from "./components/CalendarHeader";

function App() {
  const [currentMonth, SetCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    SetCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  // console.table(getMonth());
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <CalendarHeader />
      <Month month={currentMonth} />
    </div>
  );
}

export default App;
