import Link from "next/link";

import {
  Link as LinkChackra,
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {
  IntialCompanyLinksHref,
  IntialSuportLinksHref,
} from "../constantes/constantes";
const Logo = (props) => {
  return (
    <svg
      width="63"
      height="55"
      viewBox="0 0 63 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.19272 37.7024L1.86402 12.7013C1.86402 6.23885 7.10287 1 13.5653 1H29.7103C32.9415 1 35.5609 3.61943 35.5609 6.85065C35.5609 10.0819 32.9415 12.7013 29.7103 12.7013H25.3654C19.7346 12.7013 15.17 17.266 15.17 22.8968V37.89C15.17 41.7504 12.0405 44.8799 8.18009 44.8799C4.2462 44.8799 1.08713 41.6348 1.19272 37.7024Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
      <path
        d="M61.8073 17.2976L61.136 42.2987C61.136 48.7611 55.8971 54 49.4347 54H33.2897C30.0585 54 27.4391 51.3806 27.4391 48.1494C27.4391 44.9181 30.0585 42.2987 33.2897 42.2987H37.6346C43.2654 42.2987 47.83 37.734 47.83 32.1032L47.83 17.11C47.83 13.2496 50.9595 10.1201 54.8199 10.1201C58.7538 10.1201 61.9129 13.3652 61.8073 17.2976Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
      <ellipse
        cx="31.5864"
        cy="27.9302"
        rx="10.7139"
        ry="9.89448"
        fill="#32DDF4"
        fill-opacity="0.42"
      />
      <path
        d="M33.7237 53.8934L14.3751 53.445C9.56503 53.445 5.66573 49.5457 5.66573 44.7357V36.1566C5.66573 33.7516 7.61538 31.8019 10.0204 31.8019C12.4254 31.8019 14.3751 33.7516 14.3751 36.1566V38.3504C14.3751 41.967 17.3069 44.8988 20.9235 44.8988H33.8279C36.312 44.8988 38.3258 46.9126 38.3258 49.3967C38.3258 51.9216 36.2479 53.9519 33.7237 53.8934Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
      <path
        d="M32.0412 2.48325L51.3898 2.93157C56.1998 2.93157 60.0992 6.83087 60.0992 11.6409V20.22C60.0992 22.625 58.1495 24.5747 55.7445 24.5747C53.3395 24.5747 51.3898 22.625 51.3898 20.22V18.0262C51.3898 14.4097 48.458 11.4778 44.8414 11.4778L31.937 11.4778C29.4529 11.4778 27.4391 9.46404 27.4391 6.97993C27.4391 4.45503 29.5169 2.42476 32.0412 2.48325Z"
        fill="#00FCBF"
        fill-opacity="0.29"
        stroke="#00FCBF"
      />
    </svg>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  //Estado del Company Links
  const [linksCompanyHref, setLinksCompanyHref] = useState(
    IntialCompanyLinksHref
  );

  return (
    <Box
      bg={useColorModeValue(500, "gray.900")}
      color={useColorModeValue(300, "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo></Logo>
            </Box>

            <Text fontSize={"sm"}>© 2022 EKing. All rights reserved</Text>

            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"https://twitter.com/home"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"http://youtube.com/"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>

            {linksCompanyHref?.map((item) => (
              <Link href={item.href} key={item.link}>
                <LinkChackra
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Text
                    px={1}
                    py={1}
                    rounded={"md"}
                    fontWeight={"semibold"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {item.link}
                  </Text>
                </LinkChackra>
              </Link>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
