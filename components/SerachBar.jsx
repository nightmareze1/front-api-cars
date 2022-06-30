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
          value={search}
          onChange={(e) => searchInput(e)}
          placeholder="Search..."
          size="lg"
        />
        <Button
          rightIcon={<FiSearch w={5} h={5} />}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          height={"3rem"}
          fontWeight={600}
          color={"white"}
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
