import React from "react";
import { DayCard } from "../styles/Styles";
import { DayType } from "../types/DayType";

export default function Day({ day, index }: DayType) {
  return (
    <DayCard>
      <>
        {index === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
        <p>{day.format("DD")}</p>
      </>
    </DayCard>
  );
}
