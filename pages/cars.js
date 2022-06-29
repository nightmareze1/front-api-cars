import React from "react";
import ContainerHF from "../components/ContainerHF";
import CarCard from "../components/CarCard";
import { Box } from "@chakra-ui/react";

export default function cars() {
  return (
    <ContainerHF>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexFlow={"wrap"}
        p={"3rem"}
      >
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
      </Box>
    </ContainerHF>
  );
}
