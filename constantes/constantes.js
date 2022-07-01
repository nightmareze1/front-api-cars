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
