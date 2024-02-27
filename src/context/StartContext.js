import React, { createContext, useContext, useState } from "react";

const StartContext = createContext();

export const StartProvider = ({ children }) => {
  const [start, setStart] = useState(false);

  return (
    <StartContext.Provider value={{ start, setStart }}>
      {children}
    </StartContext.Provider>
  );
};

export const useStart = () => useContext(StartContext);
