import { React, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { getAllCarsFetch, carsSearchFetch } from "../constantes/constantes";

export default function GlobalContextProvider({ children }) {
  const hola = "hola mundo";

  //ESTADO DE BUSQUEDA
  const [search, setSearch] = useState("");
  const [car, setCar] = useState([{}]);

  //GET ALL CARS
  const getAllCars = () => {
    getAllCarsFetch().then((x) => setCar(x));
  };
  //SEARCH CARS
  const serarchCars = (query) => {
    carsSearchFetch(query).then((x) => setCar(x));
  };
  //FUNCION PARA BUSCAR CAR OBTENER EL VALOR DE BUSQUEDA
  const searchInput = ({ target }) => {
    const { value: mySearch } = target;
    setSearch(mySearch);
    if (!mySearch) {
      getAllCarsFetch().then((x) => setCar(x));
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        hola,
        searchInput,
        search,
        setSearch,
        getAllCars,
        car,
        setCar,
        serarchCars,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
