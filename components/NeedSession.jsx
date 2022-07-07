import React from "react";
import Head from "next/head";
import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
} from "@chakra-ui/react";

export default function NeedSession() {
	return (
		<>
			<Container maxW={"3xl"}>
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
					>
						You need to be <br />
						<Text as={"span"} color={"teal"}>
							logged in
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						To have a better experience, create an account, and start exploring
						the options that our website can offer you.
					</Text>
					<Stack spacing={6} direction={"row"} justifyContent={"center"}>
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
				</Stack>
			</Container>
		</>
	);
}
