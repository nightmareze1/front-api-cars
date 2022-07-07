import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Button,
} from "@chakra-ui/react";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { fetchCarDelete } from "../constantes/constantes";

export default function CarCard() {
	var imagen;
	const { car, setCar, deleteCar, modalContent, individualCar, carEdit } =
		useContext(GlobalContext);
	return car?.map((item, index) => {
		const { _id, name: model, price, description, images } = item;
		if (images) {
			imagen = images[0].name;
		} else {
			return;
		}

		return (
			<Center key={`${_id}${index}`} m={"2rem"} py={12}>
				<Box
					role={"group"}
					p={6}
					maxW={"330px"}
					w={"full"}
					bg={useColorModeValue("white", "gray.800")}
					boxShadow={"2xl"}
					rounded={"lg"}
					pos={"relative"}
					zIndex={1}
				>
					<Box
						rounded={"lg"}
						mt={-12}
						pos={"relative"}
						height={"230px"}
						_after={{
							transition: "all .2s ease",
							content: '""',
							w: "full",
							h: "50%",
							pos: "absolute",
							top: 5,
							left: 0,
							zIndex: -1,
							bg: 200,
						}}
						_groupHover={{
							_after: {
								filter: "blur(20px)",
							},
						}}
					>
						<Image
							onClick={() => individualCar(_id)}
							cursor={"pointer"}
							rounded={"lg"}
							height={230}
							width={282}
							objectFit={"cover"}
							src={`http://localhost:4000/cars/uploads/${imagen}`}
						/>
					</Box>
					<Stack pt={10} align={"center"}>
						<Text
							color={"teal"}
							fontSize={"sm"}
							fontWeight={600}
							textTransform={"uppercase"}
						>
							Model
						</Text>
						<Heading
							fontSize={"2xl"}
							fontFamily={"body"}
							fontWeight={500}
							textTransform={"capitalize"}
						>
							{model}
						</Heading>
						<Stack mt={"100px"} mb={"1rem"} direction={"row"} align={"center"}>
							<Text
								mt={"1rem"}
								mb={"1rem"}
								fontSize={"sm"}
								textTransform={"uppercase"}
								color="teal"
							>
								Price
							</Text>
							<Heading fontWeight={800} fontSize={"xl"}>
								{`$${price}`}
							</Heading>
						</Stack>

						<Stack direction={"row"} align={"center"}>
							<Button
								onClick={() => deleteCar(_id)}
								leftIcon={<BsTrashFill w={5} h={5} />}
								display={{ base: "none", md: "inline-flex" }}
								fontSize={"sm"}
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
								Delete
							</Button>
							<Button
								onClick={() => carEdit(_id)}
								leftIcon={<FiEdit w={5} h={5} />}
								display={{ base: "none", md: "inline-flex" }}
								fontSize={"sm"}
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
								Edit
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Center>
		);
	});
}
