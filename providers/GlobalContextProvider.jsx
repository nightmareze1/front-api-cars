import { React, useState } from "react";
import GlobalContext from "../context/GlobalContext";

export default function GlobalContextProvider({ children }) {
  const hola = "hola mundo";

  //ESTADO DE BUSQUEDA
  const [search, setSearch] = useState("");

  //FUNCION PARA BUSCAR CAR OBTENER EL VALOR DE BUSQUEDA
  const searchInput = ({ target }) => {
    const { value: mySearch } = target;
    setSearch(mySearch);
  };
  return (
    <GlobalContext.Provider value={{ hola, searchInput, search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
}
