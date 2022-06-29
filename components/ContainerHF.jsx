import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box, Container } from "@chakra-ui/react";

export default function ContainerHF({ children }) {
  return (
    <Box maxW="100%">
      <Header></Header>
      {children}

      <Footer></Footer>
    </Box>
  );
}
