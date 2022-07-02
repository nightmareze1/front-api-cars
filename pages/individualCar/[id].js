import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function IndividualCar({ car }) {
  const router = useRouter();
  console.log(car);
  console.log(router.query);

  const { id } = router.query;

  return (
    <Box>
      <Text>{id}</Text>
    </Box>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:4000/cars/findOneForId/${context.query.id}`
  );
  const resJson = await res.json();
  const datos = resJson;

  return { props: { car: datos } };
};
