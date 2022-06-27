import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const firstDayofMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayofMonth;
  let weeksToDisplay;
  dayjs(new Date(year, month)).daysInMonth() > 30
    ? (weeksToDisplay = 6)
    : (weeksToDisplay = 5);

  const daysMatrix = new Array(weeksToDisplay).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
}
