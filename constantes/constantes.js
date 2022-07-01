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
export const getAllCarsFetch = async () => {
  const res = await fetch("http://localhost:4000/cars/findAll");
  const data = await res.json();
  return data;
};
//GET SEARCH CARS
export const carsSearchFetch = async (search) => {
  const res = await fetch(
    `http://localhost:4000/cars/findAll/name?name=${search}  `
  );
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
