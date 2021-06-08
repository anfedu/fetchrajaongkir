import React from "react";
import { createContext } from "react";

const QueryContext = createContext({
  palette: { type: "dark" },
});

const QueryProvider = (props) => {
  const [province, setProvince] = React.useState([]);

  return <QueryContext.Provider value={{ province }} {...props} />;
};

export { QueryContext, QueryProvider };
