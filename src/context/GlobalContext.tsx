import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  //@ts-ignore
  setMonthIndex: index => {},
});

export default GlobalContext;
