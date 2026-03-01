import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  // these are just place holders, real values will be provided in App.jsx
  themeMode: "light", //default value The default value in createContext is only a fallback. It is used exclusively when a component tries to use useTheme() but is not wrapped inside a <ThemeProvider>.
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
