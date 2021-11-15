import React, { useState, createContext } from "react";

export const GlobalContext = createContext([]);

const GlobalState = ({ children }) => {
  const [stanje, setStanje] = useState([]);

  return (
    <GlobalContext.Provider value={{ stanje, setStanje }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
