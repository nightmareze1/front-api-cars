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

const IMAGE =
  "https://cdn-1.motorsport.com/images/amp/6n9yKwOY/s1000/ferrari-296-gt3-sketch-1.jpg";

export default function CarCard() {
  return (
    <Center m={"2rem"} py={12}>
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
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
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
            ferrari
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
              $57
            </Heading>
          </Stack>

          <Stack direction={"row"} align={"center"}>
            <Button
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
}