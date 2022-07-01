import { React, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import {
  getAllCarsFetch,
  carsSearchFetch,
  fetchCarDelete,
} from "../constantes/constantes";

export default function GlobalContextProvider({ children }) {
  const hola = "hola mundo";
  //MODAL ESTADO
  const [modalContent, setModalContent] = useState("");

  //Ratio Search Bar
  const [ratioValue, setRatioValue] = useState("1");

  //ESTADO DE BUSQUEDA
  const [search, setSearch] = useState("");
  const [car, setCar] = useState([{}]);

  //DELETE CAR
  const deleteCar = (_id) => {
    fetchCarDelete(_id);
    getAllCarsFetch(ratioValue).then((x) => setCar(x));
    setModalContent("Car successfully removed");
    setTimeout(() => {
      setModalContent("");
    }, 1500);
  };

  //GET ALL CARS
  const getAllCars = () => {
    getAllCarsFetch(ratioValue).then((x) => setCar(x));
  };
  //SEARCH CARS
  const serarchCars = (query) => {
    carsSearchFetch(query, ratioValue).then((x) => setCar(x));
  };
  //FUNCION PARA BUSCAR CAR OBTENER EL VALOR DE BUSQUEDA
  const searchInput = ({ target }) => {
    const { value: mySearch } = target;
    setSearch(mySearch);
    if (!mySearch) {
      getAllCarsFetch(ratioValue).then((x) => setCar(x));
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        ratioValue,
        setRatioValue,
        modalContent,
        deleteCar,
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
