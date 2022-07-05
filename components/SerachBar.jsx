import { React, useContext, useState } from "react";
("react");
import {
	Box,
	Text,
	Input,
	Button,
	Stack,
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";
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
		<Box
			width={"100%"}
			display={"flex"}
			justifyContent={"center"}
			flexFlow={"wrap"}
		>
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
				<Box
					width={"100%"}
					display={"flex"}
					justifyContent={"center"}
					flexFlow={"wrap"}
				>
					<Input
						pos={"relative"}
						w={"50rem"}
						color="teal"
						fontWeight={"bold"}
						value={search}
						onChange={(e) => searchInput(e)}
						placeholder="Search..."
						size="lg"
					/>
					<Box
						bg={"#ffff"}
						pos={"absolute"}
						width={"50rem"}
						display={"flex"}
						justifyContent={"space-around"}
						alignItems={"space-around"}
						flexFlow={"column"}
						mt={"3rem"}
						zIndex={"10"}
						p={"1rem"}
						borderidth="1px"
						borderRadius="12px"
						overflowX="auto"
					>
						<List spacing={4}>
							<ListItem>
								<ListIcon as={FiSearch} color="gray.500" />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
							</ListItem>
							<ListItem>
								<ListIcon as={FiSearch} color="green.500" />
								Assumenda, quia temporibus eveniet a libero incidunt suscipit
							</ListItem>
							<ListItem>
								<ListIcon as={FiSearch} color="green.500" />
								Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
							</ListItem>
							{/* You can also use custom icons from react-icons */}
							<ListItem>
								<ListIcon as={FiSearch} color="green.500" />
								Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
							</ListItem>
						</List>
					</Box>
				</Box>

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
		</Box>
	);
}
function RadioInput({ ratioValue, setRatioValue }) {
	var { searchInput, search, setSearch, serarchCars, serarchCarsRatio } =
		useContext(GlobalContext);
	return (
		<RadioGroup p={"1rem"} onChange={setRatioValue} value={ratioValue}>
			<Stack direction="row">
				<Radio
					onClick={() => serarchCarsRatio(search, "-1")}
					colorScheme={"teal"}
					value="-1"
				>
					More expensive
				</Radio>
				<Radio
					onClick={() => serarchCarsRatio(search, "1")}
					colorScheme={"teal"}
					value="1"
				>
					Cheaper
				</Radio>
			</Stack>
		</RadioGroup>
	);
}
