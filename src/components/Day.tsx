import React from "react";
import { CurrentDayP, DayCard } from "../styles/Styles";
import { DayType } from "../types/DayType";
import dayjs from "dayjs";

export default function Day({ day, index }: DayType) {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? (
      <CurrentDayP>{day.format("DD")}</CurrentDayP>
    ) : (
      <p>{day.format("DD")}</p>
    );
  }
  return (
    <DayCard>
      <>
        {index === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
        {getCurrentDayClass()}
      </>
    </DayCard>
  );
}
