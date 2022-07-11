import {
	useColorModeValue,
	Box,
	Flex,
	Stack,
	Heading,
	Text,
	Container,
	Input,
	Button,
	SimpleGrid,
	Avatar,
	AvatarGroup,
	useBreakpointValue,
	IconProps,
	Icon,
	FormLabel,
	Image,
	Textarea,
	Select,
	useDisclosure,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

import { FiCamera, FiSave } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";
import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaShoppingCart,
} from "react-icons/fa";
import { fetchRegisterPagePost } from "../constantes/constantes.js";
import PopUpModal from "./PopUpModal";
import { useRouter } from "next/router";

export default function SignUp() {
	const router = useRouter();
	const { push } = router;
	const [modalContent, setModalContent] = useState("");
	const refForm = useRef();

	const fetchPost = async (user) => {
		setModalContent("");
		const { current: form } = refForm;
		const formData = new FormData(form);

		fetchRegisterPagePost(user).then((x) => {
			let username = formData.get("username");
			let password = formData.get("password");
			let email = formData.get("email");
			//console.log(x.error);

			// setTimeout(() => {
			//   setModalContent(
			//     " The user must have a capital letter at least one number and be greater than 8"
			//   );
			//
			// }, 1000);

			if (x.error) {
				setTimeout(() => {
					setModalContent(x.error);
				}, 1000);
			}

			if (x.id) {
				setModalContent("User created");
				push("/signIn");
			} else {
				setModalContent(JSON.stringify(x.thisUserIsRegistered));
			}
		});
	};

	const handleSumbit = (event) => {
		const { current: form } = refForm;
		// event.preventDefault()
		const formData = new FormData(form);
		const username = formData.get("username");
		const password = formData.get("password");
		const email = formData.get("email");

		if (formData && username && password && email) {
			const user = {
				username,
				email,
				password,
			};
			fetchPost(user);
		} else {
			setModalContent("Missing dates");
			setTimeout(() => {
				setModalContent("");
			}, 1000);
		}
	};

	return (
		<Box
			position={"relative"}
			w={"full"}
			backgroundSize={"cover"}
			backgroundPosition={"25% 50%"}
			backgroundImage={
				"url(https://images.unsplash.com/photo-1566816716536-6ab88cbda34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80)"
			}
		>
			<PopUpModal modalContent={modalContent}></PopUpModal>

			<Container
				as={SimpleGrid}
				maxW={"7xl"}
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 10, lg: 32 }}
				py={{ base: 10, sm: 20, lg: 32 }}
			>
				<Stack spacing={{ base: 10, md: 20 }}>
					<Heading
						color={1900}
						lineHeight={1.1}
						fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
					>
						<Text color={"teal"} as={"span"}>
							Enjoy
						</Text>{" "}
						<Text color={"gray.600"}>the </Text>
						<Text color={"#1B2430"}>experience</Text>
					</Heading>

					<Stack direction={"row"} spacing={4} align={"center"}></Stack>
				</Stack>
				<Stack
					bg={"gray.50"}
					rounded={"xl"}
					p={{ base: 4, sm: 6, md: 8 }}
					spacing={{ base: 8 }}
					maxW={{ lg: "lg" }}
				>
					<Stack spacing={4}>
						<Heading
							color={"gray.800"}
							lineHeight={1.1}
							fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
						>
							Create Account
						</Heading>
						<Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
							Thank you for choosing us, you are one step away from being part
							of our website. Complete the form so that we can have your data
							and you can make use of our services
						</Text>
					</Stack>
					<Box as={"form"} mt={10} ref={refForm}>
						<Stack spacing={4}>
							{/* <form ref={refForm}> */}

							<FormLabel>
								Username{" "}
								<Text color={"gray.500"}>
									(maximum length 16 at least one number and one capital
									letter):
								</Text>
							</FormLabel>
							<Input
								required
								placeholder="Username"
								name="username"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>
							<FormLabel>Password</FormLabel>
							<Input
								required
								type={"password"}
								placeholder="Password"
								name="password"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>

							<FormLabel>
								Email <Text color={"gray.500"}>(example@gmail.com)</Text>
							</FormLabel>
							<Input
								required
								name="email"
								type={"email"}
								placeholder="Email"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
							/>

							<Button
								// type="submit"
								onClick={(e) => handleSumbit(e)}
								rounded={"none"}
								w={"full"}
								mt={8}
								size={"lg"}
								p={"7"}
								bg={useColorModeValue(100, 200)}
								color={useColorModeValue("white", "gray")}
								textTransform={"uppercase"}
								leftIcon={<FiSave w={5} h={5} />}
								_hover={{
									// transform: "translateY(2px)",
									// boxShadow: "lg",
									transform: "translateY(10px)",

									bg: 200,
								}}
							>
								Register
							</Button>
							{/* </form> */}
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
