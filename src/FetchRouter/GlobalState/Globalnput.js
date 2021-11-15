import React, { useState, createContext } from "react";

export const InputContext = createContext("");

const GlobalInput = ({ children }) => {
  const [input, setInput] = useState("Apple");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};

export default GlobalInput;
