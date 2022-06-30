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
} from "@chakra-ui/react";
import { FiCamera, FiSave } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";

import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaShoppingCart,
} from "react-icons/fa";
import { useRef } from "react";

export default function SignUp() {
  const refForm = useRef();

  const fetchPost = async (user) => {
    const { current: form } = refForm;
    const formData = new FormData(form);

    console.log(user);
  };

  const handleSumbit = (event) => {
    const { current: form } = refForm;
    event.preventDefault();
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
      alert("faltan datos ");
    }
  };

  return (
    <Box
      position={"relative"}
      w={"full"}
      backgroundImage={
        "url(https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg)"
      }
    >
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
            <Text color={"red.500"} as={"span"}>
              Thank
            </Text>{" "}
            you very much for{" "}
            <Text color={"blue.500"} as={"span"}>
              choosing
            </Text>{" "}
            us
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
              Upload your product
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              ></Text>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                "
              </Text>
              <Icon as={FaCarSide} />
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                "
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              You can load cars, motorcycles, boats and agricultural products.
              The way to upload is very simple, first upload the model, version
              and price and then upload the image once done by clicking on the
              button with the save icon
            </Text>
          </Stack>
          <Box as={"form"} mt={10} ref={refForm}>
            <Stack spacing={4}>
              {/* <form ref={refForm}> */}

              <FormLabel>Username</FormLabel>
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

              <FormLabel>Email</FormLabel>
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
