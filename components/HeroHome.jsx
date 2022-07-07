import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import {
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	VStack,
	useBreakpointValue,
	Container,
	Icon,
	IconProps,
} from "@chakra-ui/react";

export default function HeroHome() {
	const { setToken, token, tokenFunction } = useContext(GlobalContext);

	return (
		<Container
			maxW={"5x2"}
			w={"full"}
			backgroundSize={"cover"}
			backgroundPosition={"-10% 70%"}
			backgroundImage={
				"url(https://images.unsplash.com/photo-1617814076231-2c58846db944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80)"
			}
		>
			<Stack
				textAlign={"center"}
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
			>
				<Heading
					fontWeight={600}
					fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
					lineHeight={"110%"}
				>
					<Text color={"teal.400"}>Welcome </Text>
					<Text as={"span"} color={"white"}>
						to
					</Text>{" "}
					<Text as={"span"} color={"green.400"}>
						unique
					</Text>{" "}
					<Text as={"span"} color={300}>
						website
					</Text>
				</Heading>
				<Text color={"white"} maxW={"3xl"}>
					Let us show you what we are capable of with disciplined effort and
					dedication. Always with passion for what we do
				</Text>
				{}
				{!token && (
					<Stack spacing={6} direction={"row"}>
						<Button
							as={"a"}
							href={"/signUp"}
							rounded={"10px"}
							px={6}
							colorScheme="teal"
						>
							Register
						</Button>
						<Button as={"a"} href={"/signIn"} rounded={"10px"} px={6}>
							Log In
						</Button>
					</Stack>
				)}
			</Stack>
		</Container>
	);
}
