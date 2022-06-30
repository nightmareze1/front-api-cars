import { React, useContext, useState } from "react";
("react");
import { Box, Text, Input, Button, Stack } from "@chakra-ui/react";
import GlobalContext from "../context/GlobalContext";
import { FiSearch } from "react-icons/fi";

export default function SerachBar() {
  const { searchInput, search, setSearch } = useContext(GlobalContext);
  return (
    <>
      {" "}
      <Text mb="8px">Value: {search}</Text>
      <Stack
        spacing={2}
        direction="row"
        align="center"
        justifyContent={"center"}
        width={"full"}
      >
        <Input
          w={"50rem"}
          color="teal"
          fontWeight={"bold"}
          value={search}
          onChange={(e) => searchInput(e)}
          placeholder="Search..."
          size="lg"
        />
        <Button
          rightIcon={<FiSearch w={5} h={5} />}
          display={{ base: "flex", md: "inline-flex" }}
          flexFlow={{ base: "column", md: "row" }}
          height={{ base: "3rem", md: "3rem" }}
          fontWeight={600}
          color={"white"}
          fontSize={{ base: "small", md: "large" }}
          bg={100}
          href={"#"}
          _hover={{
            bg: 200,
            transform: "translateY(5px)",
            transition: " all 1s ease-out",
          }}
        >
          Search
        </Button>
      </Stack>
    </>
  );
}
