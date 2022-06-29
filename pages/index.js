import { React, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import ContainerHF from "../components/ContainerHF";

export default function index() {
  const { hola } = useContext(GlobalContext);

  return <ContainerHF></ContainerHF>;
}
