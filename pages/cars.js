import React, { useContext, useEffect } from "react";
import ContainerHF from "../components/ContainerHF";
import CarCard from "../components/CarCard";
import { Box } from "@chakra-ui/react";
import SerachBar from "../components/SerachBar";
import GlobalContext from "../context/GlobalContext";

export default function cars() {
  const { getAllCars } = useContext(GlobalContext);
  useEffect(() => {
    getAllCars();
    return () => {};
  }, []);

  return (
    <ContainerHF>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexFlow={"wrap"}
        p={"3rem"}
      >
        <SerachBar></SerachBar>
        <CarCard></CarCard>
      </Box>
    </ContainerHF>
  );
}
