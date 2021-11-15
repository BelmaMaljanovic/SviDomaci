import React, { useState, createContext } from "react";

export const ContextContext = createContext("");//sintaksa zas kreiranje contexta

export const Contextt = ({ children }) => {
  const [stanje, useStanje] = useState("hello");
  return (
    <ContextContext.Provider value={{ stanje, useStanje }}>
      {children}
    </ContextContext.Provider>
  );
};
