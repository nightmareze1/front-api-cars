import { React, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { useRouter } from "next/router";
import { verify } from "jsonwebtoken";

import { ObtenerTokenLocalStorage } from "../constantes/constantes.js";
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

	//ESTADO PREDICT BUSQUEDA
	const [predict, setPredict] = useState([{}]);
	//token
	const [token, setToken] = useState();

	//BORRAR TOKEN
	const deleteToken = () => {
		setModalContent("Log out acount ");

		setTimeout(() => {
			setModalContent("");
			sessionStorage.removeItem("token");
			setToken("");
		}, 1000);
	};
	//OBTENGO EL TOKEN
	const tokenFunction = async () => {
		setToken(await ObtenerTokenLocalStorage());
		////console.log(token);
	};

	//AUTO PREDICT
	const autoPredictSearch = async (
		search = "",
		limit = 1,
		order = -1,
		offset = 0
	) => {
		const res = await fetch(
			`http://localhost:4000/cars/findAll/name?name=${search}&sort=${order}&limit=${limit}&offset=${offset} `
		);
		const data = await res.json();
		setPredict(data);
		//console.log(data);
	};
	//DELETE CAR
	const deleteCar = async (_id) => {
		console.log(await ObtenerTokenLocalStorage());
		fetchCarDelete(_id);
		setModalContent("Car successfully removed");
		setTimeout(() => {
			getAllCarsFetch(ratioValue).then((x) => setCar(x));

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
	//SEARCH CARS WITH PREDICT
	const serarchCarsWithPredict = (query) => {
		carsSearchFetch(query, ratioValue).then((x) => setCar(x));
		setTimeout(() => {
			setSearch("");
		}, 1000);
		//console.log("click");
	};
	//FUNCION PARA BUSCAR CAR OBTENER EL VALOR DE BUSQUEDA
	const searchInput = ({ target }) => {
		const { value: mySearch } = target;
		setSearch(mySearch);
		autoPredictSearch(mySearch);
		if (!mySearch) {
			getAllCarsFetch(ratioValue).then((x) => setCar(x));
		}
	};

	//Obtengo el id de la imagen para ir ha IndividualCar
	const individualCar = (id) => {
		const { push } = router;
		push(`individualCar/${id}`);
	};
	//Obtengo el id de la imagen para ir ha IndividualCar
	const carEdit = (id) => {
		const { push } = router;
		push(`carEdit/${id}`);
	};

	return (
		<GlobalContext.Provider
			value={{
				deleteToken,
				setToken,
				token,
				tokenFunction,
				serarchCarsWithPredict,
				predict,
				setPredict,
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
