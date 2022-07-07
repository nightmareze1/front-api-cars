import React, { useContext } from "react";
import UploadCar from "../components/UploadCar";
import ContainerHF from "../components/ContainerHF";
import GlobalContext from "../context/GlobalContext";
import NeedSession from "../components/NeedSession";
export default function signUp() {
	const { setToken, token, tokenFunction } = useContext(GlobalContext);

	return (
		<ContainerHF>
			{token ? <UploadCar></UploadCar> : <NeedSession></NeedSession>}
		</ContainerHF>
	);
}
