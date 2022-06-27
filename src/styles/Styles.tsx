import styled from "styled-components";

export const MonthContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
`;

export const DayCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
`;
