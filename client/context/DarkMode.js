import React from "react";
import { createContext } from "react";

const DarkContext = createContext({
  palette: { type: "dark" },
});

const DarkProvider = (props) => {
  const [check, setCheck] = React.useState({ palette: { type: "dark" } });
  const toggleDarkTheme = () => {
    if (check.palette.type === "light") {
      setCheck({ palette: { type: "dark" } });
    } else if (check.palette.type === "dark") {
      setCheck({ palette: { type: "light" } });
    }
  };

  return (
    <DarkContext.Provider
      value={{ theme: check, toggleDarkTheme }}
      {...props}
    />
  );
};

export { DarkContext, DarkProvider };
