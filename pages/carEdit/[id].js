import React, { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { AiFillCar } from "react-icons/ai";

import {
  Textarea,
  Input,
  FormLabel,
  Icon,
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";
import cars from "../cars";
import { FiSave } from "react-icons/fi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { oneCarForId, UpdateCarFetch } from "../../constantes/constantes";
import GlobalContext from "../../context/GlobalContext";
import PopUpModal from "../../components/PopUpModal";

export default function IndividualCar({ car }) {
  const [updateCar, setUpdateCar] = useState(car);
  const router = useRouter();
  //console.log(car);
  //console.log(router.query);

  const { id } = router.query;

  return (
    <Box>
      {<CarDetail car={updateCar} setUpdateCar={setUpdateCar}></CarDetail>}
    </Box>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:4000/cars/findOneForId/${context.query.id}`
  );
  const resJson = await res.json();
  const datos = resJson;

  return { props: { car: datos } };
};

function CarDetail({ car, setUpdateCar }) {
  const { name: model, description, price } = car;
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box w={"100%"} h={{ base: "100%", sm: "400px", lg: "500px" }}>
            <Carrousel car={car} setUpdateCar={setUpdateCar}></Carrousel>
          </Box>
        </Flex>
        {/* <Stack spacing={{ base: 6, md: 10 }}>
          <Box display={"flex"} justifyContent={"center"} as={"header"}>
            <Heading
              mt={"5rem"}
              lineHeight={1.1}
              textTransform={"capitalize"}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {model}
            </Heading>
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Heading
                textTransform={"uppercase"}
                color={useColorModeValue("teal", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"500"}
              >
                car information
              </Heading>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"lg"}
              >
                {description}
              </Text>
            </VStack>
            <Box>
              <Box display="flex" justifyContent={"center"}>
                <Heading
                  textTransform={"uppercase"}
                  color={useColorModeValue("teal", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"500"}
                >
                  Price
                </Heading>
              </Box>

              <Box display="flex" justifyContent={"center"}>
                <Heading
                  mt={"1rem"}
                  textTransform={"uppercase"}
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"500"}
                >
                  {`$${price}`}
                </Heading>
              </Box>
            </Box>
          </Stack>

          <Button
            // type="submit"
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            p={"7"}
            bg={useColorModeValue(100, 200)}
            color={useColorModeValue("white", "gray")}
            textTransform={"uppercase"}
            leftIcon={<FiEdit w={5} h={5} />}
            _hover={{
              transform: "translateY(10px)",

              bg: 200,
            }}
          >
            EDIT
          </Button>
        </Stack> */}
        <UpdateCar></UpdateCar>
      </SimpleGrid>
    </Container>
  );
}

function Carrousel({ car, setUpdateCar }) {
  const { setModalContent, modalContent } = useContext(GlobalContext);
  const { images, price, description, model, _id } = car;

  //DELETE IMG
  const deleteImage = (indexImage) => {
    const imagesDelete = images.filter((item, index) => index != indexImage);
    const carUpdate = { model, price, description, images: imagesDelete };
    UpdateCarFetch(carUpdate, _id).then((x) => console.log(x, "Updated"));
    oneCarForId(_id).then((x) => setUpdateCar(x));
    setModalContent("Photo Delete");
    setTimeout(() => {
      setModalContent("");
    }, 1000);
  };

  const arrImages = images?.map((item) => {
    return { img: `http://localhost:4000/cars/uploads/${item.name}` };
  });
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "teal",
    },
  };

  const slides = arrImages;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all 3s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
      bg="#ffff"
      _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <PopUpModal modalContent={modalContent}></PopUpModal>
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                opacity={0.6}
                borderRadius={"30px"}
                mt={"2px"}
                ml={"2px"}
                bg="teal"
                color="white"
                fontSize="large"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Button
                onClick={() => deleteImage(sid)}
                opacity={0.6}
                borderRadius={"30px"}
                mt={"2px"}
                ml={"-50%"}
                bg="teal"
                color="white"
                fontSize="large"
                p="8px 12px"
                pos="absolute"
                top="0"
                leftIcon={<BsTrashFill w={5} h={5} />}
                _hover={{
                  bg: 200,
                  transform: "translateY(5px)",
                  transition: " all 1s ease-out",
                }}
              >
                Delete
              </Button>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                objectFit="cover"
                // transition="all 5s"
                // filter={currentSlide === sid ? "blur(0)" : "grayscale(100%)"}
              />
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {slides.map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}

function UpdateCar() {
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
