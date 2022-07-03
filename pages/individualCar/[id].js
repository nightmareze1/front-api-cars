import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
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
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import cars from "../cars";
import { FiSave } from "react-icons/fi";

export default function IndividualCar({ car }) {
  const router = useRouter();
  //console.log(car);
  //console.log(router.query);

  const { id } = router.query;

  return <Box>{<CarDetail car={car}></CarDetail>}</Box>;
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:4000/cars/findOneForId/${context.query.id}`
  );
  const resJson = await res.json();
  const datos = resJson;

  return { props: { car: datos } };
};
function CarDetail({ car }) {
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
            <Carrousel car={car}></Carrousel>
          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
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
            leftIcon={<FaMoneyBillWaveAlt w={5} h={5} />}
            _hover={{
              transform: "translateY(10px)",

              bg: 200,
            }}
          >
            BUY
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

function Carrousel({ car }) {
  const { images } = car;
  const arrImages = images?.map((item) => {
    return { img: `http://localhost:4000/cars/uploads/${item.name}` };
  });
  //console.log(arrImages);

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
