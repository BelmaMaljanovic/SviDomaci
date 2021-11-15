import React, { useReducer, createContext } from "react";

const pocetnoStanje = "";
export const GlobalContext = createContext(pocetnoStanje);

const reducer = (stanje, action) => {
  switch (action.type) {
    case "promeni":
      return action.payload;
    default:
      return stanje;
  }
};

export const GlobalState = ({ children }) => {
  const [stanje, dispatch] = useReducer(reducer, pocetnoStanje);
  return (
    <GlobalContext.Provider value={{ stanje, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
