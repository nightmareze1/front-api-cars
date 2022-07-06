import { React, useContext, useState } from "react";
("react");
import {
	FormControl,
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
		serarchCarsWithPredict,
		searchInput,
		search,
		setSearch,
		serarchCars,
		ratioValue,
		setRatioValue,
		predict,
		setPredict,
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
				pos={"relative"}
				spacing={2}
				direction="row"
				align="center"
				justifyContent={"center"}
				width={"full"}
			>
				<Stack
					spacing={2}
					direction="row"
					align="center"
					justifyContent={"center"}
					pos={"relative"}
					width={"49%"}
				>
					<Input
						pos={"relative"}
						w={"28rem"}
						color="teal"
						fontWeight={"bold"}
						value={search}
						onChange={(e) => searchInput(e)}
						placeholder="Search..."
						size="lg"
					/>

					{search && predict.length > 0 ? (
						<Box
							w={"77%"}
							bg={"white"}
							minHeight={"20vh"}
							height={"auto"}
							pos="absolute"
							top="50"
							left="0"
							right="0"
							bottom="0"
							zIndex={"10"}
							overflow={"auto"}
							display={"flex"}
							justifyContent="flex-start"
							border="1px"
							borderColor="gray.200"
							borderRadius={"md"}
						>
							<List w="90%" ml="10px" mt="10px" position="absolute" spacing={2}>
								{predict?.map((prediction) => {
									const { name, _id } = prediction;
									return search || predict ? (
										<ListItem
											onClick={() => serarchCarsWithPredict(name)}
											textTransform={"capitalize"}
											key={_id}
											cursor="pointer"
											_hover={{
												transform: "translateY(5px)",
												transition: " all .6s ease-out",
												color: "teal",
												fontWeight: 600,
											}}
										>
											<ListIcon as={FiSearch} color="gray.500" />
											{name}
										</ListItem>
									) : null;
								})}
							</List>
						</Box>
					) : null}

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
