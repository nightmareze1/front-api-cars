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
import { AiFillCar } from "react-icons/ai";

import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaShoppingCart,
} from "react-icons/fa";
import { useRef, useState } from "react";
import { createCarFetch, postAllPhotos } from "../constantes/constantes";
import { useRouter } from "next/router";
import PopUpModal from "./PopUpModal";

export default function UploadCar() {
  const refForm = useRef();
  const router = useRouter();
  const { push } = router;
  const [modalContent, setModalContent] = useState("");

  const fetchPost = async (car) => {
    const { current: form } = refForm;
    const formData = new FormData(form);
    const namesPhotos = await postAllPhotos(formData);
    const carConImagenes = { ...car, images: namesPhotos };
    createCarFetch(carConImagenes);
    setModalContent("Car Created Successfully");
    setTimeout(() => {
      setModalContent("");
    }, 1000);
  };

  const handleSumbit = (event) => {
    const { current: form } = refForm;
    // event.preventDefault()
    const formData = new FormData(form);
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const file = formData.get("file");

    if (formData && name && description && price) {
      const car = {
        name,
        description,
        price: parseInt(price),
      };
      fetchPost(car);
    } else {
      alert("faltan datos ");
    }
  };

  return (
    <Box
      position={"relative"}
      w={"full"}
      backgroundSize={"cover"}
      backgroundPosition={"25% 50%"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80)"
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
            <Text color={200} as={"span"}>
              Welcome
            </Text>{" "}
            <Text color={300} as={"span"}>
              to the
            </Text>{" "}
            <Text color={500}> upload section</Text>
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
              Upload your Car
              <Text
                as={"span"}
                bgGradient="linear(to-r, black ,white)"
                bgClip="text"
              >
                --
              </Text>
              <Icon as={AiFillCar} />
              <Text
                as={"span"}
                bgGradient="linear(to-r, white ,black)"
                bgClip="text"
              >
                --
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Welcome to the car loading section, do not hesitate to load the
              car you want in our database. We offer you advice and commitment
              when putting you in contact with the client so that you can make a
              safe sale
            </Text>
          </Stack>
          <Box as={"form"} mt={10} ref={refForm}>
            <Stack spacing={4}>
              {/* <form ref={refForm}> */}

              <FormLabel>Model</FormLabel>
              <Input
                required
                placeholder="Model"
                name="name"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />

              <FormLabel>Description</FormLabel>
              <Textarea
                required
                placeholder="Description"
                name="description"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <FormLabel>Price</FormLabel>
              <Input
                required
                name="price"
                type={"number"}
                placeholder="Price"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />

              <Input
                required
                type={"file"}
                name="file"
                placeholder="Upload Img"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                multiple
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
                Upload
              </Button>
              {/* </form> */}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
