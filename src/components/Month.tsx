import React from "react";
import { MonthContainer } from "../styles/Styles";
import { MonthProps } from "../types/MonthProps";
import Day from "./Day";

export default function Month({ month }: MonthProps) {
  return (
    <MonthContainer>
      {month.map((week, i) => (
        <React.Fragment key={i}>
          {week.map((day, index) => (
            <Day day={day} key={index} index={i} />
          ))}
        </React.Fragment>
      ))}
    </MonthContainer>
  );
}
