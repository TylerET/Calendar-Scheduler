import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <header>
      {/* <img></img> */}
      <h1>Calendar</h1>
      <button>Today</button>
      <button onClick={handlePrevMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
        </svg>
      </button>
      <button onClick={handleNextMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
        </svg>
      </button>
      <h2>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
    </header>
  );
}
