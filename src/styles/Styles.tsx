import styled from "styled-components";

export const MonthContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
`;

export const DayCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;
`;

export const CurrentDayP = styled.p`
  color: white;
  background-color: blue;
  border-radius: 9999px;
  width: 1.75rem;
`;
