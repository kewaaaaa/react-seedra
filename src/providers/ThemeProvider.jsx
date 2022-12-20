import React, { useState, createContext } from "react";
export const ThemeContext = createContext({ type: "Light" });
export const ThemeProvider = ({ children }) => {
  const [type, setType] = useState('Dark');
  
  return (
    <ThemeContext.Provider value={{ type, setType }}>
      {children}
    </ThemeContext.Provider>
  );
};
