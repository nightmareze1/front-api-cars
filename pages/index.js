import { React, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function index() {
  const { hola } = useContext(GlobalContext);

  return <div>{hola}</div>;
}
