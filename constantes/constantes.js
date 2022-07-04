//Links Footer
//Initial state de links de Copany
export const IntialCompanyLinksHref = [
	{ link: "About us", href: "#" },
	{ link: "Contact us", href: "#" },
];

export const HeaderLinks = [
	{
		label: "Home ",
		href: "/",
	},
	{
		label: "Cars",
		href: "/cars",
	},
	{
		label: "Upload Car",
		href: "/uploadCar",
	},
];
//OBTIENE EL TOKEN DEL SESSION STORAGE
export const ObtenerTokenLocalStorage = async () => {
	var miToken = await sessionStorage.getItem("token");

	if (miToken) {
		return miToken;
	}
};

//FETCH CREATE USER
export const fetchRegisterPagePost = async (datos) => {
	const res = await fetch(`http://localhost:4000/users/createUser`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return data;
};

//USER LOGIN
export const fetchLoginPagePost = async (datos) => {
	const res = await fetch(`http://localhost:4000/users/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return data;
};

//GET ALL CARS
export const getAllCarsFetch = async (order) => {
	const res = await fetch(`http://localhost:4000/cars/findAll?sort=${order}`);
	const data = await res.json();
	return data;
};
//GET SEARCH CARS
export const carsSearchFetch = async (search, order) => {
	const res = await fetch(
		`http://localhost:4000/cars/findAll/name?name=${search}&sort=${order}  `
	);
	const data = await res.json();
	return data;
};
//ONE CAR FOR ID
export const oneCarForId = async (id) => {
	const res = await fetch(`http://localhost:4000/cars/findOneForId/${id}`);
	const data = await res.json();
	return data;
};

//FETCH DELETE ONE CAR
export const fetchCarDelete = async (id) => {
	const res = await fetch(`http://localhost:4000/cars/deleteOneForId/${id}`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			// token: JSON.parse(await ObtenerTokenLocalStorage())?.token,
		},
	});
};

//POST ALL PHTOS CARS
export const postAllPhotos = async (data) => {
	const res = await fetch("http://localhost:4000/cars/files", {
		method: "POST",
		mode: "cors",
		body: data,
	});
	return await res.json();
};

//FETCH CREATE CAR
export const createCarFetch = async (datos) => {
	const res = await fetch(`http://localhost:4000/cars/createCar`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			// token: JSON.parse(await ObtenerTokenLocalStorage())?.token,
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return data;
};
//UPDATE CAR
export const UpdateCarFetch = async (datos, id) => {
	const res = await fetch(`http://localhost:4000/cars/updateOneForId/${id}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			// token: JSON.parse(await ObtenerTokenLocalStorage())?.token,
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return await data;
};
