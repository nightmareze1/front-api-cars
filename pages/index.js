import { React, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import ContainerHF from "../components/ContainerHF";
import HeroHome from "../components/HeroHome";

export default function index() {
  const { hola } = useContext(GlobalContext);

  return (
    <ContainerHF>
      <HeroHome></HeroHome>
    </ContainerHF>
  );
}
