import { createContext } from "react";

const ThemeContext = createContext({
  foreground: "#000000",
  background: "#eeeeee",
});

export default ThemeContext;
