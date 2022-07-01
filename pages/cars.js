import ContainerHF from "../components/ContainerHF";
import CarCard from "../components/CarCard";
import { Box } from "@chakra-ui/react";
import SerachBar from "../components/SerachBar";
import { React, useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PopUpModal from "../components/PopUpModal";

export default function cars() {
  const { getAllCars, car, modalContent } = useContext(GlobalContext);
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
        <PopUpModal modalContent={modalContent}></PopUpModal>
      </Box>
    </ContainerHF>
  );
}
