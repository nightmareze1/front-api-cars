import { React, useContext, useState } from "react";
("react");
import { Box, Text, Input, Button, Stack } from "@chakra-ui/react";
import GlobalContext from "../context/GlobalContext";
import { FiSearch } from "react-icons/fi";
import { Radio, RadioGroup } from "@chakra-ui/react";

export default function SerachBar() {
	const {
		searchInput,
		search,
		setSearch,
		serarchCars,
		ratioValue,
		setRatioValue,
	} = useContext(GlobalContext);
	return (
		<>
			<RadioInput
				ratioValue={ratioValue}
				setRatioValue={setRatioValue}
			></RadioInput>
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
					onClick={() => serarchCars(search)}
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
function RadioInput({ ratioValue, setRatioValue }) {
	var { searchInput, search, setSearch, serarchCars, serarchCarsRatio } =
		useContext(GlobalContext);
	console.log(ratioValue);
	return (
		<RadioGroup p={"1rem"} onChange={setRatioValue} value={ratioValue}>
			<Stack direction="row">
				<Radio
					onClick={() => serarchCarsRatio(search,"-1")}
					colorScheme={"teal"}
					value="-1"
				>
					More expensive
				</Radio>
				<Radio
					onClick={() => serarchCarsRatio(search,"1")}
					colorScheme={"teal"}
					value="1"
				>
					Cheaper
				</Radio>
			</Stack>
		</RadioGroup>
	);
}
