import React from "react";
import GlobalContext from "../context/GlobalContext";

export default function GlobalContextProvider({ children }) {
  const hola = "hola mundo";
  return (
    <GlobalContext.Provider value={{ hola }}>{children}</GlobalContext.Provider>
  );
}
