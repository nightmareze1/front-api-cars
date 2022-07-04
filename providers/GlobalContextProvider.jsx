import { React, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { useRouter } from "next/router";
import {
	getAllCarsFetch,
	carsSearchFetch,
	fetchCarDelete,
} from "../constantes/constantes";

export default function GlobalContextProvider({ children }) {
	//OBTENGO LA RUTA
	const router = useRouter();
	const hola = "hola mundo";
	//MODAL ESTADO
	const [modalContent, setModalContent] = useState("");

	//RATIO SEARCH BAR
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
	//SEARCH CARS RATIO
	const serarchCarsRatio = (query, r) => {
		carsSearchFetch(query, r).then((x) => setCar(x));
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

	//Obtengo el id de la imagen para ir ha IndividualCar
	const individualCar = (id) => {
		const { push } = router;
		push(`individualCar/${id}`);
		console.log(id);
	};
	//Obtengo el id de la imagen para ir ha IndividualCar
	const carEdit = (id) => {
		const { push } = router;
		push(`carEdit/${id}`);
		console.log(id);
	};

	return (
		<GlobalContext.Provider
			value={{
				serarchCarsRatio,
				carEdit,
				individualCar,
				ratioValue,
				setRatioValue,
				modalContent,
				setModalContent,
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
